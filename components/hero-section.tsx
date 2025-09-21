
'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react'

const heroProducts = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    image: "https://media.wired.com/photos/66f1c3f553c7b3c588c28d7a/16:9/w_2000,h_1125,c_limit/AirPods%20Pro%202%20Abstract%20Background%20092024%20SOURCE%20Apple.jpg",
    price: "$129",
    rating: 4.8
  },
  {
    id: 2,
    name: "Gaming Mechanical Keyboard",
    image: "https://media.wired.com/photos/65b0438c22aa647640de5c75/16:9/w_2400,h_1350,c_limit/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg",
    price: "$89",
    rating: 4.9
  },
  {
    id: 3,
    name: "Stainless Steel Tumbler",
    image: "https://thumbs.dreamstime.com/b/reusable-stainless-steel-water-bottle-generative-ai-380915730.jpg",
    price: "$24",
    rating: 4.7
  },
  {
    id: 4,
    name: "Premium Leather Backpack",
    image: "http://media.gq-magazine.co.uk/photos/641d9b93c9a5d0662d51508f/master/pass/Backpacks_HP.jpg",
    price: "$156",
    rating: 4.6
  },
  {
    id: 5,
    name: "Fitness Tracker Watch",
    image: "https://images.bauerhosting.com/affiliates/sites/8/2023/06/Fitness-trackers-Android-hero.png",
    price: "$199",
    rating: 4.8
  }
]

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeProduct, setActiveProduct] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % heroProducts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Amazon Sellers Network
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Team</a>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full">
              Get Started
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2"
            >
              <Star className="w-4 h-4 text-blue-600 fill-current" />
              <span className="text-sm font-medium text-blue-800">Malaysia's Premier Amazon Partner</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                <span className="block">Transform Your</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Amazon Journey
                </span>
                <span className="block">Into Success</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                From setup to scale - we empower Malaysian entrepreneurs to dominate global Amazon marketplaces with proven strategies and expert guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full">
                <Play className="mr-2 w-5 h-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">300%</div>
                <div className="text-sm text-gray-600">Avg Growth</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - 3D Floating Product Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[600px] perspective-1000"
          >
            {/* Main Featured Product */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-0 right-0 w-72 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform-gpu"
              style={{
                transform: 'rotateX(5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 p-6 flex items-center justify-center">
                <Image
                  src={heroProducts[activeProduct].image}
                  alt={heroProducts[activeProduct].name}
                  width={120}
                  height={120}
                  className="object-contain rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-semibold">{heroProducts[activeProduct].rating} ⭐</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{heroProducts[activeProduct].name}</h3>
                <p className="text-gray-600 text-sm">Premium quality product with excellent reviews</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{heroProducts[activeProduct].price}</span>
                  <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Floating Side Cards */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotateX: [0, 2, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-12 left-0 w-48 h-32 bg-white rounded-2xl shadow-xl p-4 transform-gpu"
              style={{
                transform: 'rotateX(-3deg) rotateY(8deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="https://cdn.abacus.ai/images/e09c534d-c0cb-476b-97cf-49df7d313fef.png"
                  alt="Success Rate"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-2xl font-bold text-green-600">98.5%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateZ: [0, -2, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-32 left-8 w-40 h-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-4 text-white transform-gpu"
              style={{
                transform: 'rotateX(8deg) rotateY(-10deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold">RM 2.3M</p>
                <p className="text-sm opacity-90">Monthly Sales</p>
              </div>
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-96 h-96 border border-gray-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-80 h-80 border border-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer hover:border-blue-600 transition-colors"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
