/**
 * Generates a soft, music-box style test track (WAV).
 * Usage: bun scripts/gen-test-audio.ts <out.wav> <seconds> [stereo]
 */
const out = process.argv[2] ?? "/tmp/test-track.wav";
const seconds = Number(process.argv[3] ?? 12);
const stereo = process.argv[4] === "stereo";
const rate = 22050;

// C major pentatonic, two octaves — gentle, non-grating
const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
const noteDur = 0.45;
const totalSamples = Math.floor(seconds * rate);
const channels = stereo ? 2 : 1;
const bytes = totalSamples * channels * 2;

const pcm = new Int16Array(totalSamples * channels);
for (let n = 0; n < totalSamples; n++) {
  const t = n / rate;
  const noteIdx = Math.floor(t / noteDur) % notes.length;
  const f = notes[noteIdx];
  const phase = (t % noteDur) / noteDur;
  // soft attack + long release envelope
  const env = Math.min(1, phase / 0.08) * Math.pow(1 - phase, 1.6);
  // fundamental + a touch of sparkle (2nd harmonic)
  const s = Math.sin(2 * Math.PI * f * t) * 0.55 + Math.sin(4 * Math.PI * f * t) * 0.18;
  const v = Math.max(-1, Math.min(1, s * env * 0.5));
  const sample = Math.round(v * 32767);
  pcm[n * channels] = sample;
  if (stereo) pcm[n * channels + 1] = Math.round(v * 0.9 * 32767);
}

// WAV header
const header = Buffer.alloc(44);
header.write("RIFF", 0);
header.writeUInt32LE(36 + bytes, 4);
header.write("WAVE", 8);
header.write("fmt ", 12);
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20); // PCM
header.writeUInt16LE(channels, 22);
header.writeUInt32LE(rate, 24);
header.writeUInt32LE(rate * channels * 2, 28);
header.writeUInt16LE(channels * 2, 32);
header.writeUInt16LE(16, 34);
header.write("data", 36);
header.writeUInt32LE(bytes, 40);

await Bun.write(out, Buffer.concat([header, Buffer.from(pcm.buffer)]));
console.log(`wrote ${out}: ${((44 + bytes) / 1024 / 1024).toFixed(2)} MB, ${seconds}s, ${channels}ch`);
