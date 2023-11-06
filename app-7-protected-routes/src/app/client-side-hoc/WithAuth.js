"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function WithAuth(Component) {
  const auth = false;

  return function authFunc(props) {
    useEffect(() => {
      if (!auth) return redirect("/");
    }, []);

    return <Component {...props} />;
  };
}
