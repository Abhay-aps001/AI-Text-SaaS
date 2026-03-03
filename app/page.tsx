import Navbar from "./components/sections/navbar"
import Hero from "./components/sections/hero"
import Features from "./components/sections/features"
import Demo from "./components/sections/demo"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
    </main>
  )
}