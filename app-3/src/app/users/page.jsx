import { getUsers } from "@/fetchApi/getUsers";
import Link from "next/link";

export const metadata = {
  title: "Users",
};

export default async function page() {
  const usersData = await getUsers();

  const content = (
    <div>
      {usersData.map((user) => (
        <h4 key={user.id}>
          {user.name}
          <Link href={`users/${user.id}`}> Details & Posts</Link>
        </h4>
      ))}
    </div>
  );

  return content;
}
