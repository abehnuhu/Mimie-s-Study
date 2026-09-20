"use client";

import { useEffect } from "react";

/** Registers the PWA service worker (https only, silent failures). */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && window.location.protocol === "https:") {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);
  return null;
}
