"use client";
import "./Breadcrumb.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ homeElement }) {
  const paths = usePathname();
  const separator = <span> / </span>;
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="my-breadcrumb">
      <ul>
        {homeElement && (
          <li className={paths === "/" ? "active" : ""}>
            <Link href={"/"}>{homeElement}</Link>
            {pathNames.length > 0 && separator}
          </li>
        )}

        {pathNames.map((path, idx) => {
          let href = `/${pathNames.slice(0, idx + 1).join("/")}`;

          return (
            <React.Fragment key={idx}>
              <li className={paths === href ? "active" : ""}>
                <Link href={href}>
                  {path[0].toUpperCase() + path.slice(1, path.length)}
                </Link>
                {pathNames.length !== idx + 1 && separator}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
