"use client";
import Link from "next/link";
import { links } from "./data";
import styles from "./Navbar.module.css";
import { AlertButton } from "../alertButton/AlertButton";
import { ThemeArea } from "../theme/ThemeArea";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.onscroll = () => {
      if (scrollY >= 90) {
        navRef.current.style.padding = "20px 0";
      } else {
        navRef.current.style.padding = "0";
      }
    };
  }, []);

  return (
    <div ref={navRef} className={styles.navbar}>
      {/* <button
        //   cannot use onClick in server component
        onClick={() => {
          alert("Hello");
        }}
      >
        Alert
      </button> */}

      <AlertButton />

      {/* Theme */}
      <ThemeArea />

      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
