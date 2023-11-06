import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import UserCard from "../components/UserCard";
import { options } from "../api/auth/[...nextauth]/options";

// Protected By Middleware

export default async function Extra() {
  const session = await getServerSession(options);

  return (
    <div className={styles.main}>
      <UserCard user={session?.user} pagetype="Extra" />
    </div>
  );
}
