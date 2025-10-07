import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let username: string | undefined;

  if (contentType.includes("application/json")) {
    try {
      const raw = await request.json();
      if (raw && typeof raw === "object" && "username" in raw) {
        const u = (raw as { username?: unknown }).username;
        if (typeof u === "string") {
          username = u;
        }
      }
    } catch {}
  }

  if (!username) {
    try {
      const form = await request.formData();
      const value = form.get("username");
      if (typeof value === "string") username = value;
    } catch {}
  }

  username = username?.trim();
  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set("tw_user", username, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ ok: true });
}
