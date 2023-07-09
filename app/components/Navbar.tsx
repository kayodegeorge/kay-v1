"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Menu from "./Menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="text-dark left-0 top-0 z-[999] w-full">
      <div
        // className={`left-0 top-0 z-50 flex w-full justify-between ${
        //   menuOpen ? "bg-text-dark text-text-gray" : "bg-white"
        // } px-4 py-8 transition ease-in-out lg:px-[100px]`}
        className={cn(
          "left-0 top-0 z-50 flex w-full justify-between bg-white px-4 py-8 transition ease-in-out lg:px-[100px]",
          {
            "bg-text-dark text-text-gray": menuOpen,
          }
        )}
      >
        <Link href="/" className="uppercase">
          <span>azeez</span>
        </Link>

        <div className="hidden gap-8 lg:flex">
          <Link
            href="/work"
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
          >
            work
          </Link>

          <Link
            href="/about"
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
          >
            about
          </Link>

          <a
            href="https://drive.google.com/file/d/1w5wsr7QSCGXyIkh6-Lo4y4awrQ3vtGyA/view"
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
            rel="noopener noreferrer"
            target="_blank"
          >
            resume
          </a>

          <a
            href="mailto:isiakabdulazeez46@gmail.com"
            className={cn(
              "relative overflow-hidden pb-2 uppercase after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:-translate-x-full after:bg-black after:transition after:duration-300 after:ease-in after:content-[''] after:hover:translate-x-0"
            )}
          >
            contact
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
        >
          {menuOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-text-dark"
            >
              <path
                d="M14.9964 0.994202L1.00488 14.9857"
                stroke="#F5F5F5"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M15.0003 14.9943L0.99707 0.988159"
                stroke="#F5F5F5"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-text-dark"
            >
              <line
                x1="2"
                y1="6"
                x2="19"
                y2="6"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="2"
                y1="13"
                x2="19"
                y2="13"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>

      <Menu menuOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;
