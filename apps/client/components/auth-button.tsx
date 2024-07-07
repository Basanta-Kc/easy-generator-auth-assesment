"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { Button } from "@client/components/ui/button";

function AuthButton() {
  const { data: session } = useSession();

  return session && session.user ? (
    <>
      <p>Welcome to the application. {session.user.name}. </p>
      <Button variant="destructive" asChild>
        <Link href="/api/auth/signout">Sign Out</Link>
      </Button>
    </>
  ) : (
    <>
      <Button asChild>
        <Link href="/api/auth/signin">Sign In</Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href="/signup">Sign Up</Link>
      </Button>
    </>
  );
}

export { AuthButton };
