"use client";
import { track } from "@vercel/analytics";
import Link from "next/link";

function Enrollment() {
  return (
    <Link
      href="#"
      target="_blank"
      onClick={() => {
        track("enrollment", { location: "investment" });
      }}
      className="bg-primary hover:bg-primary w-[25rem] text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
    >
      SIM, QUERO GARANTIR MEU EBOOK
    </Link>
  );
}

export default Enrollment;
