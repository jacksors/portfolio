"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  router.replace("/about.html");
  return <></>;
};

export default Page;
