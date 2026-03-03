"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold max-w-4xl"
      >
        Improve Your Writing with AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-400 mt-6 max-w-xl"
      >
        Transform your text into professional, friendly, or simple tone instantly.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 rounded-2xl hover:scale-105 transition"
      >
        Try It Now
      </motion.button>

    </section>
  )
}
