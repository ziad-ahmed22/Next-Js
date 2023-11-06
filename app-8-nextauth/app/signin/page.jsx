"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";

export default function Signin({ searchParams }) {
  const username = useRef();
  const password = useRef();
  const callbackUrl = searchParams?.callbackUrl;
  const error = searchParams?.error;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      username: username.current.value,
      password: password.current.value,
      redirect: true,
      callbackUrl: callbackUrl ?? "http://localhost:3000",
    });
  };

  const loginWithGoogle = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  const loginWithGithub = () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>something went wrong</p>}

        <input type="text" placeholder="Username" ref={username} />
        <input type="password" placeholder="Password" ref={password} />

        <button>Login</button>
        <Link href={callbackUrl ?? "/"}>Cancel</Link>
      </form>

      <button onClick={loginWithGoogle}>Login With Google</button>
      <button onClick={loginWithGithub}>Login With Github</button>
    </>
  );
}
