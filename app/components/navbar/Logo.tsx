"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h1
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer font-bold text-3xl text-rose-500"
    >
      Aabhas Ko Hotel
    </h1>
    // <Image
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer"
    //   src="/images/logo.png"
    //   height="100"
    //   width="100"
    //   alt="Logo"
    // />
  );
};

export default Logo;
