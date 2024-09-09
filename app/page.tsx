import { HeroHighlight } from "@/components/ui/hero-highlight";
import AnimatedHeader from "./components/AnimatedHeader";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className=" flex min-h-screen flex-col  items-center  h-full w-full">
      <HeroHighlight className=" min-h-screen py-32">
        <div className=" flex flex-col">
          <AnimatedHeader />
          <Button className=" py-6 px-12 w-fit self-start text-4xl ">خدماتنا </Button>
        </div>
      </HeroHighlight>
    </section>
  );
}
