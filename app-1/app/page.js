"use client";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>HOME</h1>
      <button onClick={() => router.push("/articles")}>Articles (push)</button>
      {" - "}
      <button onClick={() => router.replace("/articles")}>
        Articles (replace)
      </button>
      {" - "}
      <button onClick={() => router.forward()}>Forward</button>
      {" - "}
      <button onClick={() => router.refresh()}>Refresh</button>
    </div>
  );
}

// ====================================================
// SPA (Single Page Application)
// SSR (Server Side Rendering)
// SSG (Static Site Generation)
// ISG (Incremental Static Generation)
// ====================================================
