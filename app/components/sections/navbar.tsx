"use client"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">AI Text</h1>
        <button className="bg-white text-black px-4 py-2 rounded-xl">
          Get Started
        </button>
      </div>
    </nav>
  )
}