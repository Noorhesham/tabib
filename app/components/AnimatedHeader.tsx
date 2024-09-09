"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { splitStringUsingRegex } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AnimatedHeader = () => {
  const words = ["أهلا", " في ", "TABIB", "هدفنا ", "الحفاظ", "علي", "صحتك"];
  const [changeName, setChangeName] = useState(false);

  useGSAP(() => {
    // First animation timeline for the initial sequence
    const tl = gsap.timeline({
      onComplete: () => {
        // After the initial animation completes, start the infinite loop
        startInfiniteSwap();
      },
    });

    tl.fromTo(
      ".title",
      {
        opacity: 0,
        y: 100,
        rotateX: -90,
        ease: "power2.inOut",
        stagger: 0.3,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.3,
        duration: 1,
      }
    );

    tl.fromTo(
      ".char",
      { opacity: 0, y: 100, stagger: 0.1, ease: "power2.inOut", rotateX: -90 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, rotateX: 0 }
    );
    tl.fromTo(
      "#heart",
      { clipPath: "circle(0% at 50% 50%)" }, // Start with a small circle
      { clipPath: "circle(100% at 50% 50%)", duration: 1, ease: "power2.inOut" } // Expand to full size
    );
    tl.fromTo(
      ".title2",
      {
        opacity: 0,
        y: 100,
        rotateX: -90,
        ease: "power2.inOut",
        stagger: 0.3,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.3,
        duration: 1,
      }
    );
    tl.fromTo(
      "#img-doc",
      {
        y: -40,
        height: 0,
        rotateX: -90,
        opacity: 0,
        duration: 0.5,
      },
      {
        y: 0,
        height: "auto",
        rotateX: 0,
        opacity: 1,
        duration: 0.5,
      }
    ).to("#img-doc", { rotate: 360, duration: 0.3 });
    tl.to(".char", { opacity: 0, y: 100, stagger: 0.1, ease: "power2.inOut", rotateX: 90, delay: 1.4 });
    const startInfiniteSwap = () => {
      const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

      tl2
        .to(".arabic-word", { opacity: 1, y: 0, duration: 0.3, rotateX: 0, ease: "power2.inOut" })
        .to(".arabic-word", { opacity: 0, y: -20, duration: 0.3, rotateX: 90, ease: "power2.inOut", delay: 1.5 })
        // Fade in "TABIB" and move it to its position
        .fromTo(
          ".char",
          { opacity: 0, y: 20, rotateX: -90 },
          { opacity: 1, y: 0, duration: 0.3, rotateX: 0, ease: "power2.inOut" }
        )
        .to(".char", { opacity: 0, y: 20, rotateX: 90, duration: 0.3, ease: "power2.inOut", delay: 1.5 });
    };
  }, []);

  return (
    <div className=" h-full flex  items-center py-10">
      <div className="font-bold flex gap-2 text-center text-7xl">
        <div className=" flex gap-4 flex-col">
          {/*first 3 words in a flex*/}
          <div className="flex  gap-2 items-center">
            {words.slice(0, 2).map((word, index) => (
              <p key={index} className="title text-gray-800  animate-text">
                {word}
              </p>
            ))}
            <div style={{ lineHeight: 0 }} className="text-right  mr-2">
              <h2 dir="ltr" className="tabib1  t tabib mx-2">
                {splitStringUsingRegex(words[2]).map((char, index) => (
                  <p className="char  text-blue-500 inline-block" key={index}>
                    {char}
                  </p>
                ))}
              </h2>
              <span className="arabic-word blue_gradient opacity-0">طبيب</span>
            </div>
            <div id="heart" className="  w-52 h-52 relative ">
              <Image src="/heart.png" className=" object-cover" fill alt="tabib" />
            </div>
          </div>
          {/*last 3 words in a flex*/}

          <div className="flex gap-2  items-center">
            {words.slice(3).map((word, index) => (
              <p key={index} className="title2  text-gray-800 animate-text">
                {word}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div
        id="img-doc"
        className=" bg-sky-400 border-2 border-sky-400 mr-5 w-52 h-52 relative rounded-full aspect-square overflow-hidden"
      >
        <Image src="/doc2.jpg" className=" object-contain" fill alt="tabib" />
      </div>
    </div>
  );
};

export default AnimatedHeader;
