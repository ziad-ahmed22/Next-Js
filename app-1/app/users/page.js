import Link from "next/link";
import UsersClientSide from "../components/UsersClientSide";

const UsersPage = async () => {
  // Any Req By Difault Is SSG => Will Cache Res Forever
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    //
    // // => Default
    // cache: "no-cache",
    //
    // // => SSG => Cache Forever
    // cache: "force-cache",
    //
    // // => SSR => No Cache // same as no-cache
    // cache: "no-store",
    //
    // // ISG => Cache For 60 Seconds => Mixed Of SSG & SSR
    // next: { revalidate: "60" },
    //
  });
  const data = await res.json();

  return (
    <>
      <div>
        <h1 style={{ marginBottom: "10px" }}>Users Page</h1>
        {data.map((user) => (
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            {user.name}{" "}
            <Link
              href={`users/${user.id}`}
              style={{ textDecoration: "underLine" }}
            >
              Details
            </Link>
          </p>
        ))}
      </div>
      <div>
        {/* Client Side Component */}
        <UsersClientSide />
      </div>
    </>
  );
};

export default UsersPage;
