"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import { Dores } from "./dores";
import { Desires } from "./desires";

function FeatureSection() {
  return (
    <section
      id="feature"
      className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <motion.div
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-secondary font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Dores e Desejos dos <br />
          Investidores em <span className="text-primary"> Renda Fixa </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Todo investidor busca liberdade financeira e crescimento seguro,
          <br /> mas teme as incertezas do mercado e a perda de seu patrimônio.
        </p>
      </motion.div>

      <Dores />

      <Desires />
    </section>
  );
}

export default FeatureSection;
