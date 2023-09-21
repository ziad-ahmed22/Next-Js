import UserDetails from "@/app/components/UserDetails";
import { Suspense } from "react";

const page = async ({ params }) => {
  return (
    <div>
      <h1 style={{ marginBottom: "15px" }}>User Details</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <UserDetails userId={params.userId} />
      </Suspense>
    </div>
  );
};

export default page;
