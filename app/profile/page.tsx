"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, update } = useSession();
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center gap-3">
      <p>{session?.user?.email}</p>
      <Input
        type="number"
        onChange={(event) => update({ age: Number(event.target.value) })}
        value={session?.user.age ?? 0}
        className="w-20"
      />
      <Button onClick={() => router.push("/")}>Home</Button>
    </div>
  );
}
