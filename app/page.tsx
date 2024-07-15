"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoAndChip from "@/components/LogoAndChip";
import HeaderAndDescription from "@/components/HeaderAndDescription";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen lg:p-24">
      <div className="flex flex-col max-w-screen-md gap-4 px-4 sm:gap-6 md:gap-8">
        <LogoAndChip />
        <HeaderAndDescription />
        <SignUpForm/>
      </div>
    </main>
  );
}
