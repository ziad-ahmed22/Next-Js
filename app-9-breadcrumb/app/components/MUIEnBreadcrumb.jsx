"use client";
import React from "react";
import "./Breadcrumb.css";
import Link from "next/link";
import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";

export default function MUIEnBreadcrumb({ homeElement }) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="my-mui-en-breadcrumb">
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
                {path[0].toUpperCase() + path.slice(1, path.length)}
              </Link>
            </React.Fragment>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
