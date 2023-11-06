import { redirect } from "next/navigation";

export default function ServerSide() {
  const auth = false;

  if (!auth) return redirect("/");

  return (
    <h1 style={{ margin: "20px", textAlign: "center", padding: "40px" }}>
      Server Side
    </h1>
  );
}
