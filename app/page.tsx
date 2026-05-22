"use client";

import { motion } from "framer-motion";
import {
  ReceiptText,
  Scale,
  CheckSquare,
  FileText,
} from "lucide-react";

function Card({
  title,
  icon,
  className,
  bg,
  text,
}: {
  title: string;
  icon: React.ReactNode;
  className: string;
  bg: string;
  text: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      whileHover={{ scale: 1.04 }}
      className={`absolute flex items-center gap-3 rounded-full px-6 py-4 shadow-2xl ${bg} ${text} ${className}`}
    >
      <div className="rounded-full bg-white/10 p-2">
        {icon}
      </div>

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute left-[-120px] top-[200px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute right-[-100px] top-[80px] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] left-[40%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl" />

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10 lg:flex-row lg:items-center">
        <div className="z-10 flex-1">
          <h1 className="max-w-3xl text-[55px] font-light leading-[0.95] tracking-[-3px] text-[#D7D4FF] md:text-[90px]">
            A single platform
            <br />
            to{" "}
            <span className="font-semibold text-white">
              manage every
            </span>
            <br />
            part of your legal
            <br />
            work
          </h1>

          <p className="mt-8 max-w-lg text-xl leading-10 text-[#8EA0FF]">
            Track matters, coordinate schedules,
            manage clients, centralize documents,
            and handle communication — all in one
            system.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-[#4C5BFF] px-7 py-4 text-lg font-semibold transition hover:scale-105">
              Get Started
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 px-7 py-4 text-lg backdrop-blur-xl transition hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative mt-20 h-[520px] flex-1 lg:mt-0">
          <div className="absolute right-0 top-10 h-20 w-64 rounded-full bg-white/5 blur-sm" />

          <div className="absolute right-8 top-40 h-20 w-60 rounded-full bg-white/5 blur-sm" />

          <div className="absolute left-0 bottom-24 h-20 w-72 rounded-full bg-white/5 blur-sm" />

          <Card
            title="Billing"
            icon={<ReceiptText size={24} />}
            bg="bg-[#3551FF]"
            text="text-white"
            className="right-10 top-6 rotate-[8deg]"
          />

          <Card
            title="Matters"
            icon={<Scale size={24} />}
            bg="bg-[#FF8427]"
            text="text-white"
            className="left-10 top-[180px] -rotate-[10deg]"
          />

          <Card
            title="Tasks"
            icon={<CheckSquare size={24} />}
            bg="bg-[#25163F]"
            text="text-[#FF9135]"
            className="left-[170px] bottom-[90px]"
          />

          <Card
            title="Documents"
            icon={<FileText size={24} />}
            bg="bg-[#1F1338]"
            text="text-[#FF9135]"
            className="right-0 bottom-0 -rotate-[6deg]"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-[160px] top-[260px] flex w-[360px] items-center gap-3 rounded-full bg-[#AAA8FF] px-4 py-3 shadow-2xl"
          >
            <div className="h-12 w-1 rounded-full bg-orange-500" />

            <img
              src="https://i.pravatar.cc/100"
              alt="avatar"
              className="h-14 w-14 rounded-full border-2 border-white"
            />

            <div>
              <h3 className="text-lg font-semibold text-[#2A2B61]">
                John Doe - Portal
              </h3>

              <p className="text-sm text-[#5B5B8B]">
                Hey! Could you please review a
                document for me?
              </p>

              <span className="text-xs text-[#6E6EA0]">
                MAT-2233 • 2h ago
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}