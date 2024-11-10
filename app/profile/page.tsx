"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="h-screen flex items-center justify-center">
      {session?.user?.email}
    </div>
  );
}
