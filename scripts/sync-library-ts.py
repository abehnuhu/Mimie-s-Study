import json

lib = json.load(open("prisma/seed-data/image-library.json"))
ts = (
    "// AUTO-GENERATED from image-library.json — real-life lesson photo library.\n"
    f"// {len(lib)} photos (game photos + Wikimedia Commons, freely licensed). Re-run\n"
    "// scripts/fetch-wikimedia.ts to extend.\n\n"
    "export interface LibraryImage { file: string; alt: string; caption: string; tags: string[]; }\n\n"
    "export const imageLibrary: LibraryImage[] = "
    + json.dumps(lib, indent=1, ensure_ascii=False)
    + ";\n"
)
open("prisma/seed-data/image-library.ts", "w").write(ts)
print("image-library.ts synced:", len(lib), "entries")
