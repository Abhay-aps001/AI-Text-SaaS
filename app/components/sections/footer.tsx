"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-black text-white border-t border-white/10 pt-16 pb-8 px-6 overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="font-bold text-xl">AI Text Improver</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transform your writing with the power of AI. Fix grammar, adjust tone, and communicate better — instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Product</h4>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Try It Live</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-3">

              <a
                href="https://www.linkedin.com/in/abhayypratap24/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition">
                  <Linkedin size={15} className="text-blue-400" />
                </div>
                <span className="text-sm">Abhay Pratap Singh</span>
              </a>

              <a
                href="mailto:abhayalternativeid@gmail.com"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition">
                  <Mail size={15} className="text-violet-400" />
                </div>
                <span className="text-sm">abhayalternativeid@gmail.com</span>
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Abhay Pratap Singh. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with Next.js · Groq AI · Clerk · Tailwind CSS
          </p>
        </div>

      </div>
    </motion.footer>
  )
}