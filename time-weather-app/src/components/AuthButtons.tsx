"use client";

import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={logout}
        className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10"
      >
        Logout
      </button>
    </div>
  );
}
