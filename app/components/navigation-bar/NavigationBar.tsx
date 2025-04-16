import Image from "next/image";
import Link from "next/link";
import React from "react";

import HonoSvg from "@/app/assets/svgs/hono.svg";

const NavigationBar = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/assets/svgs/hono.svg"
            alt="Hono Logo"
            width={100}
            height={100}
          />
          <span className="text-2xl font-bold"> Hono</span>
        </div>
        <nav className="flex flex-row gap-8 items-center">
          <Link href="/docs">Docs</Link>
          <Link href="/examples">Examples</Link>
          <Link href="/discussions">Discussions</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
