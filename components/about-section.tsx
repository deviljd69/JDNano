
'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle, TrendingUp, Globe, Shield, Zap, Award, ArrowRight } from 'lucide-react'
import CountUp from '@/components/count-up'

const services = [
  {
    icon: Globe,
    title: "Account Setup & Management",
    description: "Complete Amazon seller account setup with compliance for US, UAE, Singapore, and UK markets",
    color: "text-blue-500"
  },
  {
    icon: TrendingUp,
    title: "FBA & Cross-Border Logistics",
    description: "Streamlined fulfillment solutions with optimized shipping routes and cost management",
    color: "text-green-500"
  },
  {
    icon: Zap,
    title: "Product Research & Listing",
    description: "Data-driven product research and SEO-optimized listings for maximum visibility",
    color: "text-purple-500"
  },
  {
    icon: Award,
    title: "Marketing & Advertising",
    description: "PPC campaigns and brand positioning strategies that drive sales and growth",
    color: "text-orange-500"
  }
]

const stats = [
  { number: 500, label: "Active Sellers", suffix: "+" },
  { number: 40, label: "Cost Reduction", suffix: "%" },
  { number: 3, label: "Growth Rate", suffix: "x" },
  { number: 99, label: "Success Rate", suffix: "%" }
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  return (
    <section ref={ref} id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">About Our Mission</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Empowering Malaysian
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              E-commerce Dreams
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We transform local Malaysian businesses into global Amazon success stories through expert guidance, 
            proven strategies, and comprehensive support systems.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Content - About Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Malaysian Entrepreneurs Trust Us
              </h3>
              
              <div className="space-y-4">
                {[
                  "MATRADE Partnership for official government support",
                  "500+ successful seller transformations achieved",
                  "Complete A-Z solution from setup to scaling", 
                  "Local expertise combined with global market knowledge"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-6"
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group">
                  Discover Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - 3D Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="relative h-[500px] perspective-1000"
          >
            {/* Main Stats Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 3, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-72 bg-white rounded-3xl shadow-2xl overflow-hidden transform-gpu"
              style={{
                transform: 'rotateX(5deg) rotateY(-8deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <h4 className="text-white font-bold text-lg">Our Impact</h4>
              </div>
              <div className="p-6 space-y-4">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {isInView && <CountUp end={stat.number} />}{stat.suffix}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Achievement Cards */}
            <motion.div
              animate={{
                y: [0, 12, 0],
                rotateX: [0, -2, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-56 h-40 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white transform-gpu"
              style={{
                transform: 'rotateX(-8deg) rotateY(12deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6" />
                <span className="font-semibold">Success Rate</span>
              </div>
              <div className="text-3xl font-bold">99.2%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotateZ: [0, 2, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-24 left-12 w-48 h-32 bg-white rounded-2xl shadow-xl p-4 transform-gpu"
              style={{
                transform: 'rotateX(8deg) rotateY(-15deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-purple-600">RM 50M+</p>
                  <p className="text-sm text-gray-600">Total Sales Generated</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid - Modern Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
              }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer transform-gpu relative overflow-hidden"
              style={{
                transform: `rotateX(2deg) rotateY(-2deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"
                whileHover={{ borderColor: "rgb(147 197 253)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
