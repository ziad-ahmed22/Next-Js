"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h3>Something Went Wrong!</h3>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
