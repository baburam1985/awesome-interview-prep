import LoginClient from "./LoginClient";

export default function LoginPage({ searchParams }: { searchParams: { from?: string } }) {
  const from = (searchParams?.from as string | undefined) || "/";
  return <LoginClient from={from} />;
}
