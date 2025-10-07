"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginClient({ from }: { from: string }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const resp = await fetch("/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username }),
      });
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error((j as { error?: string }).error || "Login failed");
      }
      router.replace(from || "/");
      router.refresh();
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Login failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md p-6 rounded-2xl border border-white/15 bg-white/5 shadow-xl">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="mt-1 text-sm opacity-80">Log in to see your time and weather.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="username" className="text-sm opacity-80">
              Username
            </label>
            <input
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 rounded-lg bg-white/10 border border-white/15 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your name"
              minLength={1}
              required
            />
          </div>
          {error && (
            <div className="text-sm text-red-200 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 text-black font-medium disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}
