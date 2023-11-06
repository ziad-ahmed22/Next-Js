"use client";
import React from "react";
import "./Breadcrumb.css";
import Link from "next/link";
import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";

export default function MUIArBreadcrumb({ homeElement }) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const arLinks = {
    home: "البيت",
    profile: "بروفايل",
    about: "من نحن",
    last: "اخير",
  };

  return (
    <div dir="rtl" className="my-mui-ar-breadcrumb">
      <Breadcrumbs separator="/">
        {homeElement && (
          <Link
            className={paths === "/" ? "active" : ""}
            color="inherit"
            href="/"
          >
            {homeElement}
          </Link>
        )}

        {pathNames.map((path, idx) => {
          let href = `/${pathNames.slice(0, idx + 1).join("/")}`;
          return (
            <React.Fragment key={idx}>
              <Link
                key={idx}
                className={paths === href ? "active" : ""}
                color="inherit"
                href={href}
              >
                {arLinks[path]}
              </Link>
            </React.Fragment>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
