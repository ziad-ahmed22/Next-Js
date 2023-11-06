"use client";
import UserCard from "../components/UserCard";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import styles from "../page.module.css";

// Protected By Context

export default function Client() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
      // redirect("/");
    },
  });

  return (
    <div className={styles.main}>
      <UserCard user={session?.user} pagetype="Client" />
      <button onClick={signIn}>Sign in</button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
