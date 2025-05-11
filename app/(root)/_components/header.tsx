"use client";

import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function HeaderLayout() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-6 justify-between">
        <Link href="/dashboard">
          <span className="text-2xl font-bold">Carenza.ai</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/interview"
            className="flex items-center border border-white text-white p-2 px-3 rounded-md transition-all duration-300 hover:border-purple-400 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI Interview Prep
          </Link>
          <Link
            href="/resume"
            className="flex items-center border border-white text-white py-2 px-3 rounded-md transition-all duration-300 hover:border-purple-400 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI Resume Builder
          </Link>

          <UserButton />
        </div>
      </div>
    </header>
  );
}
