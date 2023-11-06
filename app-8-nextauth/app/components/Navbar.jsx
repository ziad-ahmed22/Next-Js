import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession(options);

  return (
    <nav style={{ backgroundColor: "tomato", padding: "20px" }}>
      <ul
        style={{
          display: "flex",
          fontWeight: "bold",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link href="/hhoommee">HHoommee</Link>
        </li>

        <li>
          <Link href="/">Home</Link>
        </li>

        {session?.user ? (
          <li>
            <Link href="/api/auth/signout">Sign Out</Link>
          </li>
        ) : (
          <li>
            <Link href="/api/auth/signin">Sign In</Link>
          </li>
        )}

        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/extra">Extra</Link>
        </li>
      </ul>
    </nav>
  );
}
