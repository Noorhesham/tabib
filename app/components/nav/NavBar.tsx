"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import NavLink from "./NavLink";

import MaxWidthWrapper from "../defaults/MaxWidthWrapper";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import PhoneNav from "./PhoneNav";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import MotionItem from "../defaults/MotionItem";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import useLocoScroll from "@/app/hooks/useLocoScroll";
const links = [
  {
    text: "تصفح العيادات",
    href: "/shop",
  },

  {
    text: "من نحن ؟ ",
    href: "/aboutus",
  },
];
const NavBar = () => {
  const { locoScroll } = useLocoScroll(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [active, setIsActive] = useState(false);
  const router = useRouter();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTopPage, setIsTopPage] = useState(true);
  const pathName = usePathname();
  const user = false;
  useEffect(() => {
    if (!locoScroll) return;

    const handleLocomotiveScroll = (event: any) => {
      const currentScrollY = event.scroll.y; // Locomotive Scroll's Y position
      console.log(isScrollingDown);
      // Update top-page state
      if (currentScrollY < 50) {
        setIsTopPage(true);
      } else {
        setIsTopPage(false);
      }

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    locoScroll.on("scroll", handleLocomotiveScroll);

    return () => {
      locoScroll.off("scroll", handleLocomotiveScroll);
    };
  }, [locoScroll, lastScrollY]);
  const isHome = pathName === "/";

  return (
    <header className=" w-full">
      <nav
        style={
          isScrollingDown
            ? { background: "rgba(255, 255, 255, 0.8)", transform: "translateY(-1rem)" }
            : { background: "transparent", transform: "translateY(-2px)" }
        }
        className={`${
          isHome ? `  font-semibold placeholder:text-white  ` : `  text-main2 font-semibold placeholder:text-white  `
        } fixed inset-0 z-50 max-h-[5rem] lg:max-h-[7rem]    flex flex-col gap-2  py-4 transition-all duration-300 ${
          isScrollingDown
            ? "translate-y-[-1rem]"
            : !isTopPage && !isScrollingDown
            ? `  -translate-y-2 lg:-translate-y-5 ${!isHome && "bg-white/80"}`
            : "translate-y-0"
        }`}
      >
        {" "}
        <MaxWidthWrapper noPadding>
          <div
            className={cn(
              "flex relative z-20 items-center   ",
              !isTopPage && !isScrollingDown ? "justify-center lg:justify-between" : "justify-between"
            )}
          >
            <div className="flex  items-center  gap-20 ">
              <div
                className={`${
                  !isTopPage && "lg:opacity-100  hidden lg:flex  opacity-0"
                } flex duration-150  items-center`}
              >
                <Logo isdark={isHome ? false : true} />
              </div>

              <ul className=" hidden lg:flex z-30 relative items-center  gap-4 xl:gap-8 ">
                {links.map((link) => (
                  //@ts-ignore
                  <NavLink isHome={isHome} key={link.text} href={link.href} text={link.text} subLinks={link.subLinks} />
                ))}
              </ul>
            </div>
            <div className="  flex items-center gap-2 ">
              {!user ? (
                <>
                  <Link href="/login">
                    <Button
                      className="  px-4 lg:px-8  rounded-t-full rounded-bl-sm rounded-br-sm rounded-l-full rounded-r-full"
                      variant={"ghost"}
                    >
                      تسجيل الدخول
                    </Button>
                  </Link>
                  <Link href={user ? "/dashboard" : "/signup"}>
                    <Button className="  px-4 lg:px-8 rounded-full">انضم لنا </Button>
                  </Link>
                </>
              ) : (
                <div>
                  <Button onClick={async () => {}} className=" text-xs  md:text-sm  px-4 lg:px-8 rounded-full">
                    تسجيل الخروج
                  </Button>{" "}
                  <Link href={user ? "/dashboard" : "/signup"}>
                    <Button className=" text-xs  md:text-sm px-4 lg:px-8 rounded-full">CHANGE HOSPITAL</Button>
                  </Link>
                </div>
              )}

              <div className={`z-[999] duration-150 h-full  relative lg:hidden block`}>
                <PhoneNav isHome={isHome} navigation={links} />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
};

export default NavBar;
