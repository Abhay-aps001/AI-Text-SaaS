"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const PRICE_ID = "price_1T77q422hUEzigAPa45UgkOs"

const freeFeatures = [
  "2 free trial uses",
  "3 tone options",
  "Basic grammar fix",
  "No sign-in required",
]

const proFeatures = [
  "Unlimited usage",
  "3 tone options",
  "Advanced AI rewriting",
  "Priority speed",
  "Early access to new features",
]

export default function Pricing() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: PRICE_ID }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (error) {
      console.error("Checkout error:", error)
    }
    setLoading(false)
  }

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Simple Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center mb-16"
        >
          Start free, upgrade when you need more.
        </motion.p>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-1">Free</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for trying it out</p>
            <div className="text-4xl font-bold mb-8">
              ₹0 <span className="text-gray-500 text-lg font-normal">/forever</span>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-blue-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition cursor-default">
              Current Plan
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative bg-gradient-to-b from-blue-500/10 to-violet-500/10 border border-violet-500/30 backdrop-blur-xl rounded-2xl p-8 flex flex-col"
          >
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
              Most Popular
            </div>

            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <p className="text-gray-400 text-sm mb-6">For power users who write a lot</p>
            <div className="text-4xl font-bold mb-8">
              ₹49 <span className="text-gray-400 text-lg font-normal">/month</span>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {proFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-violet-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 font-semibold hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Redirecting..." : "Get Pro →"}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}