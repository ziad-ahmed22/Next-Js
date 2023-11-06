"use client";

import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ClientSide() {
  const auth = false;

  useLayoutEffect(() => {
    if (!auth) return redirect("/");
  }, []);

  // useLayoutEffect => similler to useEffect but it works before return jsx

  return (
    <h1 style={{ margin: "20px", textAlign: "center", padding: "40px" }}>
      Client Side
    </h1>
  );
}
