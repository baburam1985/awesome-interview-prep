"use client";

import Clock from "@/components/Clock";
import Weather from "@/components/Weather";
import { useState } from "react";

export default function Home() {
  const [loggingOut, setLoggingOut] = useState(false);

  async function onLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/login";
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <div className="px-6 py-8 sm:py-12 max-w-4xl mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Time & Weather</h1>
        <button
          onClick={onLogout}
          disabled={loggingOut}
          className="rounded-lg bg-white/10 hover:bg-white/20 px-3 py-1.5 text-sm"
        >
          {loggingOut ? "Logging out…" : "Log out"}
        </button>
      </header>

      <main className="mt-10 flex flex-col items-center gap-10">
        <Clock />
        <Weather />
      </main>
    </div>
  );
}
