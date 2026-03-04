"use client"

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import { motion } from "framer-motion"

export default function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500" />
          <h1 className="font-bold text-lg tracking-tight">AI Text Improver</h1>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="text-sm text-gray-300 hover:text-white transition px-4 py-2 rounded-xl hover:bg-white/10">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="text-sm bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 rounded-xl hover:scale-105 transition font-semibold">
                  Get Started
                </button>
              </SignUpButton>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">My Account</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>

      </div>
    </motion.nav>
  )
}