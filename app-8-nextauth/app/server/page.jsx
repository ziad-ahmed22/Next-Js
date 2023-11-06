import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import UserCard from "../components/UserCard";
import { redirect } from "next/navigation";
import styles from "../page.module.css";

// Protected Here

export default async function Server() {
  const session = await getServerSession(options);

  if (!session) redirect("/api/auth/signin?callbackUrl=/server");

  console.log(session.user);

  return (
    <div className={styles.main}>
      <UserCard user={session?.user} pagetype="Server" />
    </div>
  );
}
