import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>Users Page</h1>
      {data.map((user) => (
        <p style={{ marginBottom: "10px", fontSize: "18px" }}>
          {user.name}{" "}
          <Link
            href={`users-copy/${user.id}`}
            style={{ textDecoration: "underLine" }}
          >
            Details
          </Link>
        </p>
      ))}
    </div>
  );
};

export default UsersPage;
