"use client";

import { motion } from "framer-motion";
import { Download, Play, LayoutGrid, Zap, Shield, Hand, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev % 5) + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const scrollToHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center">
      {/* Background Magical Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-green/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-saffron-orange/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Sticky Glass Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-x-0 border-t-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white">
            <Image src="/porus_logo.jpg" alt="Porus Logo" width={32} height={32} className="rounded-full shadow-lg shadow-black/50" />
            Porus
          </Link>
          <a
            href="#hero"
            onClick={scrollToHero}
            className="text-sm font-medium transition-colors px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20"
          >
            Download APK
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 w-full flex-grow flex flex-col">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[80vh]">
          <motion.div 
            className="flex-1 flex flex-col items-start pt-12 lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-gradient">
              Zero Bloat.<br />Infinite Speed.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              The minimalist, privacy-first Android browser built for one-handed use. 
              No algorithms, no trackers, just the open web.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full gap-4 max-w-md">
              <motion.a
                href="/porus.apk"
                download
                className="group relative flex items-center justify-center gap-3 w-full bg-white text-background font-semibold py-4 px-8 rounded-full overflow-hidden transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-saffron-orange/20 to-emerald-green/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-4 max-w-md mt-4">
              <button disabled className="flex items-center justify-center gap-2 flex-1 glass opacity-50 cursor-not-allowed py-3 px-4 rounded-full text-sm font-medium">
                <Play className="w-4 h-4" />
                Google Play <span className="text-[10px] uppercase ml-1 opacity-70">Soon</span>
              </button>
              <button disabled className="flex items-center justify-center gap-2 flex-1 glass opacity-50 cursor-not-allowed py-3 px-4 rounded-full text-sm font-medium">
                <LayoutGrid className="w-4 h-4" />
                Indus Appstore <span className="text-[10px] uppercase ml-1 opacity-70">Soon</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-md relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Phone Mockup Carousel */}
            <motion.div 
              className="relative aspect-[9/19] w-full max-w-[320px] mx-auto rounded-[3rem] border-[12px] border-[#0a0a0a] bg-black overflow-hidden shadow-[0_20px_70px_-15px_rgba(255,153,51,0.4),_0_50px_100px_-20px_rgba(19,136,8,0.5)] ring-1 ring-white/10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Inner bezel shadow */}
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-[2.2rem]" />
              <div className="absolute inset-0 w-full h-full z-10">
                {[1, 2, 3, 4, 5].map((num) => (
                  <motion.div
                    key={num}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === num ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={`/slide${num}.png`}
                      alt={`Porus Screenshot ${num}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature Bento Box */}
        <section className="py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for the Modern Web</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Everything you need, nothing you don&apos;t. Porus is engineered from the ground up for speed, privacy, and ergonomics.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-saffron-orange" />}
              title="Blazing Fast Engine"
              description="Instant page loads and ultra-smooth scrolling. We stripped away the bloat so you can browse at the speed of thought."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-emerald-green" />}
              title="Native Privacy"
              description="Built-in tracker and ad blocking by default. Your data stays on your device, not on our servers."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Hand className="w-8 h-8 text-white" />}
              title="Bottom-First UI"
              description="Designed purely for one-handed ergonomics. Controls are exactly where your thumb rests."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Moon className="w-8 h-8 text-white/50" />}
              title="Smart Dark Mode"
              description="Forces web pages to adapt to your eyes. Beautiful, consistent dark mode across the entire web."
              delay={0.4}
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full glass border-x-0 border-b-0 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            Porus Browser &copy; 2026. Made with ❤️ in India.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-6 p-4 glass inline-block rounded-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
