"use client";

import Link from "next/link";
import {
  useParams,
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";

export default function Nav() {
  // http://localhost:3000/users/1?name=asd

  const pathname = usePathname();
  console.log("Pathname", pathname); // /users/1
  console.log(pathname.startsWith("/users")); // true
  console.log(pathname.includes("/users")); // true

  const params = useParams();
  console.log("Params", params); // {userId: '1'}

  const searchParams = useSearchParams();
  console.log("SearchParams", searchParams);
  console.log(searchParams.toString()); // name=asd
  console.log(searchParams.get("name")); // asd

  const selectedSgment = useSelectedLayoutSegment();
  console.log("SelectedSgment", selectedSgment); // users

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/about"> About</Link>
      <Link href="/users"> Users</Link>
    </nav>
  );
}
