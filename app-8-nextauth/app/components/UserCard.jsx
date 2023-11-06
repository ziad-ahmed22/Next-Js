import Image from "next/image";

export default function UserCard({ user, pagetype }) {
  const greeting = user?.name ? <div>Hello {user?.name}!</div> : null;

  const emailDisplay = user?.email ? <div>{user?.email}</div> : null;

  const userImage = user?.image ? (
    <Image
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section>
      {greeting}
      {emailDisplay}
      {userImage}
      <p>{pagetype} Page!</p>
    </section>
  );
}
