"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export default function Clock() {
  const [now, setNow] = useState<Date>(new Date());
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center">
      <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 drop-shadow">
        {formatTime(now)}
      </div>
      <div className="mt-2 text-sm opacity-80">{timeZone}</div>
    </div>
  );
}
