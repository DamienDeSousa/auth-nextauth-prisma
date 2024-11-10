"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center gap-3">
      <Button onClick={() => router.push("/profile")}>Profile</Button>
      {status === "authenticated" ? (
        <Button onClick={() => signOut()}>Logout</Button>
      ) : (
        <Button onClick={() => router.push("/api/auth/signin/credentials")}>
          login
        </Button>
      )}
    </div>
  );
}
