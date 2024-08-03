"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className=" flex justify-between items-center py-4 px-3 border-b ">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className=" size-[35px] "
          width={35}
          height={35}
        />
      </Link>

      <nav>
        <ul className="flex gap-5 items-center text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={` ${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-500"
                } hover:text-zinc-900 transition-colors duration-200 ease-in-out`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
