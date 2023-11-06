import { getUser } from "@/fetchApi/getUser";
import styles from "./userDetails.module.css";
import { Suspense } from "react";
import UserData from "@/components/UserData";
import UserPosts from "@/components/UserPosts";
// Not Found
import { notFound } from "next/navigation";

// Dynamic Title
export const generateMetadata = async ({ params: { userId } }) => {
  const userData = await getUser(userId);

  // Not Found
  if (!userData) {
    return { title: "Not Found Page" };
  }

  return {
    title: `Users/${userId}`,
  };
};

export default async function page({ params: { userId } }) {
  const userData = await getUser(userId);

  // Not Found
  if (!userData) return notFound();

  return (
    <div className={styles.userDetails}>
      <UserData data={userData} />
      <div>
        <Suspense fallback={<h4>LOADING...</h4>}>
          <UserPosts userId={userId} />
        </Suspense>
      </div>
    </div>
  );
}
