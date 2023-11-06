import styles from "./page.module.css";
import UserCard from "./components/UserCard";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

// Protect Some Content

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <div className={styles.main}>
      {session ? (
        <UserCard user={session?.user} pagetype="Home" />
      ) : (
        <h1>You Must Login First</h1>
      )}
    </div>
  );
}
