"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Animated Spotlight */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 border border-gray-700 rounded-full bg-gray-900/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium text-gray-300">
                AI-Powered Career Guidance
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Navigate Your Career Path With AI Intelligence
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Personalized career guidance powered by advanced AI to help you
            discover opportunities, develop skills, and make informed decisions
            about your professional future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all duration-200 shadow-lg shadow-purple-500/20 cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              <span>Start Your Journey</span>
              <motion.div
                animate={{ x: hovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Abstract UI Element */}
        <motion.div
          className="mt-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
            <div className="w-full h-full rounded-lg bg-gray-950/80 backdrop-blur-sm border border-gray-800 overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-gray-400 text-sm">
                  AI Career Analysis Dashboard Preview
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border border-purple-500/30 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border border-blue-500/30 rounded-full" />
          <div className="absolute top-1/2 -right-4 w-4 h-4 bg-purple-500/20 rounded-full" />
          <div className="absolute top-1/4 -left-2 w-2 h-2 bg-blue-500/20 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
