"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuHouse, LuStar, LuMessageCircle, LuUser } from "react-icons/lu";

const Navigation = () => {
  const pathname = usePathname();

  const linkClass = (href) => (pathname === href ? "text-[#E89A8F]" : "text-neutral-400");

  return (
    <nav className="sticky bottom-0 -mx-5 rounded-t-3xl bg-white/60 backdrop-blur-xl pb-4 pt-2">
      <ul className="flex justify-around py-4">
        <li>
          <Link href="/" className={linkClass("/")}>
            <LuHouse className="size-7" />
          </Link>
        </li>
        <li>
          <Link href="/favorites" className={linkClass("/detailview")}>
            <LuStar className="size-7" />
          </Link>
        </li>
        <li>
          <Link href="/messages" className={linkClass("/messages")}>
            <LuMessageCircle className="size-7" />
          </Link>
        </li>
        <li>
          <Link href="/profile" className={linkClass("/profile")}>
            <LuUser className="size-7" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
