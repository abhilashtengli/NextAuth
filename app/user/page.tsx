import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession();

  return (
    <div>
      User Component
      {JSON.stringify(session)}
    </div>
  );
};

export default page;
