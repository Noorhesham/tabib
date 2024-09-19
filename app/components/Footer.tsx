import React from "react";
import GridContainer from "./defaults/GridContainer";
import Logo from "./Logo";
import Link from "next/link";
import MaxWidthWrapper from "./defaults/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className=" bg-sky-400">
      <MaxWidthWrapper className=" flex items-center justify-between text-gray-100">
        <Logo />

        <ul className=" flex items-center gap-2 ">
          <li>تواصل معنا</li>
          <li> من نحن ؟</li>
          <li>تصفح الدكاترة </li>
        </ul>
        <p className="  text-white">
          ALL COPYRIGHTS RESERVED <Link href={`/`}> @One More Light</Link>
        </p>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
