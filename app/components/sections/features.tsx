"use client"

import { motion } from "framer-motion"
import { Sparkles, Wand2, Zap } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI Powered",
    desc: "Advanced AI improves your writing instantly.",
  },
  {
    icon: Wand2,
    title: "Multiple Tones",
    desc: "Switch between Professional, Friendly or Simple tone.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    desc: "Get improved text in seconds with one click.",
  },
]

export default function Features() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16"
        >
          Why Choose Our AI?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:scale-105 transition"
              >
                <Icon size={40} className="mb-6 text-blue-400 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}