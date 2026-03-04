"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useUser, SignInButton } from "@clerk/nextjs"

const FREE_TRIAL_LIMIT = 2

export default function Demo() {
    const { isSignedIn } = useUser()
    const [input, setInput] = useState("")
    const [tone, setTone] = useState("Professional")
    const [output, setOutput] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const getTrialCount = () => {
        if (typeof window === "undefined") return 0
        return parseInt(localStorage.getItem("freeTrials") || "0")
    }

    const incrementTrial = () => {
        if (typeof window === "undefined") return
        localStorage.setItem("freeTrials", String(getTrialCount() + 1))
    }

    const handleImprove = async () => {
        if (!input) return

        if (!isSignedIn) {
            const trials = getTrialCount()
            if (trials >= FREE_TRIAL_LIMIT) {
                setShowPopup(true)
                return
            }
        }

        setLoading(true)

        try {
            const response = await fetch("/api/improve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: input, tone }),
            })

            const data = await response.json()
            setOutput(data.result)

            if (!isSignedIn) incrementTrial()

        } catch (error) {
            console.error("Error:", error)
            setOutput("Something went wrong.")
        }

        setLoading(false)
    }

    return (
        <section className="py-32 px-6 bg-black text-white">
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Try It Live
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl">

                    {/* Left Side */}
                    <div>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Paste your text here..."
                            className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none"
                        />

                        <select
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            className="mt-4 w-full bg-black/40 border border-white/10 rounded-xl p-3"
                        >
                            <option>Professional</option>
                            <option>Friendly</option>
                            <option>Simple</option>
                        </select>

                        <button
                            onClick={handleImprove}
                            disabled={loading}
                            className="mt-4 w-full bg-gradient-to-r from-blue-500 to-violet-500 py-3 rounded-xl hover:scale-105 transition disabled:opacity-50"
                        >
                            {loading ? "Improving..." : "Improve Text"}
                        </button>

                        {/* Trial counter - only renders after mount to avoid hydration error */}
                        {!isSignedIn && mounted && (
                            <p className="mt-3 text-sm text-gray-400 text-center">
                                {Math.max(0, FREE_TRIAL_LIMIT - getTrialCount())} free trial(s) remaining
                            </p>
                        )}
                    </div>

                    {/* Right Side */}
                    <div className="bg-black/40 border border-white/10 rounded-xl p-4 whitespace-pre-wrap">
                        {output || "Improved text will appear here..."}
                    </div>

                </div>
            </div>

            {/* Login Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center"
                    >
                        <h3 className="text-2xl font-bold mb-2">You're out of free trials</h3>
                        <p className="text-gray-400 mb-6">Sign in to continue using AI Text Improver for free.</p>

                        <SignInButton mode="modal">
                            <button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 py-3 rounded-xl hover:scale-105 transition font-semibold">
                                Sign In to Continue
                            </button>
                        </SignInButton>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition"
                        >
                            Maybe later
                        </button>
                    </motion.div>
                </div>
            )}

        </section>
    )
}