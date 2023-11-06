"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import styles from "../page.module.css";
import UserCard from "../components/UserCard";

// Protected By Context

export default function HHOOMMEE() {
  const { data: session, status } = useSession();
  console.log(session?.user);
  console.log(session?.expires);
  console.log(status);

  const handleSignout = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className={styles.main}>
      {session ? (
        <>
          <h1>
            HHOOMMEE You Are Logged In
            <br /> <br />
            {session?.user?.name}
          </h1>

          <button onClick={signOut}>Sign out</button>
          <button onClick={handleSignout}>Sign out With redirect</button>
        </>
      ) : (
        <>
          <h1>HHOOMMEE you must login</h1>
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </div>
  );
}
