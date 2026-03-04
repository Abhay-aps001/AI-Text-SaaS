import Navbar from "./components/sections/navbar"
import Hero from "./components/sections/hero"
import Features from "./components/sections/features"
import Demo from "./components/sections/demo"
import Pricing from "./components/sections/pricing"
import Footer from "./components/sections/footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Pricing /> 
      <Footer />
    </main>
  )
}