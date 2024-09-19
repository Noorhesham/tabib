"use client";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import AnimatedHeader from "./components/AnimatedHeader";
import ScrollXSections from "./components/ScrollXSections";

import "locomotive-scroll/src/locomotive-scroll.scss";
import React, { useEffect } from "react";
import Loader from "./components/Loader";
const cardData = [
  {
    text: "AI-Powered Sales Insights",
    downDesc: "Boost your sales with machine learning",
    img: "/neural_networks_of_the_brain.glb",
    three: true,
  },
  {
    text: "Onboard your store",
    desc: "A 3D store",
    img: "",
    three: false,
    animation: true,
    btn: true,
  },
  {
    text: "Market Intelligence",
    downDesc: "Gain competitive advantage with comprehensive market intelligence",
    img: "/chess_queen.glb",
    three: true,
    scale: [1, 1, 1],
    position: [0, -0.4, 1],
  },
];

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });
  return loading ? (
    <div className=" w-full h-screen backdrop-blur-md  bg-blue-400/50 flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <section className=" overflow-auto flex min-h-screen flex-col items-center h-full w-full">
      <section className="">
        <HeroHighlight className="min-h-screen  py-32">
          <div className="flex flex-col">
            <AnimatedHeader />
          </div>
        </HeroHighlight>
        <ScrollXSections />
      </section>
    </section>
  );
}
