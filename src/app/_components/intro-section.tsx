"use client";
import { track } from "@vercel/analytics";

import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";

function IntroSection() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center" id="intro">
      {/* <ModeToggle /> */}
      <BackgroundLines className="space-y-6 py-8 md:py-32 lg:py-52 relative lg:max-h-[70rem] md:max-h-[40rem]">
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-2 relative">
          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-8xl"
            initial={{ opacity: 0, x: +200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: +200 }}
            transition={{ duration: 1 }}
          >
            <span className="relative text-primary font-bold ">POUPANÇA</span>{" "}
            <br />
            <span className="text-secondary">A ARMADILHA CULTURAL</span>
          </motion.h1>
          <motion.p
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-2"
            initial={{ opacity: 0, x: +200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: +200 }}
            transition={{ duration: 1 }}
          >
            Aprenda como dobrar seus rendimentos com casos práticos que comparam
            inventimentos reais de renda fixa. Será provado que poupança é o
            pior lugar para deixar seu dinheiro.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
          >
            <a
              href="#investment"
              className="shadow-[0_4px_14px_0_rgb(255,153,0,39%)] hover:shadow-[0_6px_20px_rgba(255,153,0,23%)] hover:bg-[rgba(255,153,0,0.9)] px-8 py-2.5 bg-[#FF9900] rounded-md text-white font-light transition duration-200 ease-linear"
              onClick={() => {
                track("enrollment", { location: "intro" });
              }}
            >
              Quero aprender a investir
            </a>
            <a
              href="#feature"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              onClick={() => {
                track("features");
              }}
            >
              Saiba mais
            </a>
          </motion.div>
        </div>
      </BackgroundLines>
    </div>
  );
}
export default IntroSection;
