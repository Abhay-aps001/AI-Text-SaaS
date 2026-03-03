"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Demo() {
    const [input, setInput] = useState("")
    const [tone, setTone] = useState("Professional")
    const [output, setOutput] = useState("")
    const [loading, setLoading] = useState(false)

    // const handleImprove = () => {
    //     if (!input) return

    //     setLoading(true)

    //     setTimeout(() => {
    //         setOutput(`Improved (${tone}) version:\n\n${input}`)
    //         setLoading(false)
    //     }, 1500)
    // }
const handleImprove = async () => {
    if (!input) return

    setLoading(true)

    try {
        const response = await fetch("/api/improve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: input,
                tone: tone,
            }),
        })

        const data = await response.json()
        setOutput(data.result)
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
                    </div>

                    {/* Right Side */}
                    <div className="bg-black/40 border border-white/10 rounded-xl p-4 whitespace-pre-wrap">
                        {output || "Improved text will appear here..."}
                    </div>

                </div>
            </div>
        </section>
    )
}