"use client";

import WithAuth from "./WithAuth";

function ClientSideHOC() {
  return (
    <h1 style={{ margin: "20px", textAlign: "center", padding: "40px" }}>
      Client Side (HOC)
    </h1>
  );
}

export default WithAuth(ClientSideHOC);
