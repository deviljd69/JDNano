
'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Linkedin, Mail, Star, Award, TrendingUp, Users, ArrowRight } from 'lucide-react'

const agents = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Strategy Consultant",
    specialty: "Cross-border E-commerce Expert",
    image: "https://cdn.abacus.ai/images/e09c534d-c0cb-476b-97cf-49df7d313fef.png",
    experience: "8+ years",
    clients: "150+",
    rating: 4.9,
    description: "Specializes in scaling Malaysian businesses across Amazon US and UK markets with proven strategies for international expansion.",
    achievements: ["Amazon Brand Registry Expert", "Cross-border Compliance Specialist", "MATRADE Certified"]
  },
  {
    id: 2,
    name: "Ahmad Rashid",
    role: "FBA Logistics Specialist",
    specialty: "Supply Chain Optimization",
    image: "https://cdn.abacus.ai/images/d611ac58-f327-430d-8543-7346c2e8ae46.png",
    experience: "6+ years",
    clients: "200+",
    rating: 4.8,
    description: "Streamlines FBA operations and reduces shipping costs by 40% through optimized logistics solutions and inventory management.",
    achievements: ["FBA Certified Partner", "Logistics Optimization Expert", "Cost Reduction Specialist"]
  },
  {
    id: 3,
    name: "Priya Kumar",
    role: "Product Research Expert",
    specialty: "SEO & Listing Optimization",
    image: "https://cdn.abacus.ai/images/be8a9e76-5439-4da0-b906-5df5caf1491d.png",
    experience: "5+ years",
    clients: "180+",
    rating: 4.9,
    description: "Data-driven product research and listing optimization specialist with expertise in keyword ranking and conversion rate optimization.",
    achievements: ["SEO Specialist", "Conversion Optimization Expert", "Market Research Analyst"]
  },
  {
    id: 4,
    name: "James Wong",
    role: "PPC Marketing Manager",
    specialty: "Amazon Advertising Automation",
    image: "https://cdn.abacus.ai/images/6c9f2195-6a66-4e2c-bc12-acc8bf42df3a.png",
    experience: "7+ years",
    clients: "120+",
    rating: 4.8,
    description: "Amazon PPC specialist with advanced automation strategies that typically deliver 300% ROI improvement for Malaysian sellers.",
    achievements: ["Amazon Ads Certified", "PPC Automation Expert", "ROI Optimization Specialist"]
  },
  {
    id: 5,
    name: "Melissa Tan",
    role: "Compliance Director",
    specialty: "Account Health & Legal Support",
    image: "https://cdn.abacus.ai/images/15692258-9f20-46b6-83d9-a7306d389915.png",
    experience: "9+ years",
    clients: "100+",
    rating: 5.0,
    description: "Ensures 99.9% account health compliance and provides legal support for international market regulations and Amazon policies.",
    achievements: ["Legal Compliance Expert", "Account Health Specialist", "International Trade Consultant"]
  }
]

export default function AgentsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)
  const [autoRotateIndex, setAutoRotateIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  // Auto-rotate effect
  useEffect(() => {
    if (hoveredAgent === null) {
      const interval = setInterval(() => {
        setAutoRotateIndex((prev) => (prev + 1) % agents.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [hoveredAgent])

  return (
    <section ref={ref} id="team" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Meet Our Expert Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Success is Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Our team of certified Amazon specialists brings years of experience and proven results 
            to help Malaysian businesses dominate global marketplaces.
          </p>
        </motion.div>

        {/* Modern Floating Agent Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              onHoverStart={() => setHoveredAgent(agent.id)}
              onHoverEnd={() => setHoveredAgent(null)}
              whileHover={{ 
                scale: 1.02,
                y: -15,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group perspective-1000"
            >
              <div 
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform-gpu"
                style={{
                  transform: `rotateX(${index % 2 === 0 ? '2deg' : '-2deg'}) rotateY(${index % 3 === 0 ? '-3deg' : '3deg'})`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Auto-highlight effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
                  animate={{
                    opacity: index === autoRotateIndex && hoveredAgent === null ? [0, 1, 0] : 0
                  }}
                  transition={{ duration: 3 }}
                />

                {/* Agent Image with modern styling */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                  
                  {/* Floating Rating */}
                  <motion.div 
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center space-x-2 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-gray-900">{agent.rating}</span>
                  </motion.div>

                  {/* Social Links - Floating */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredAgent === agent.id ? 1 : 0,
                      y: hoveredAgent === agent.id ? 0 : 20
                    }}
                    className="absolute bottom-6 right-6 flex space-x-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gray-600" />
                    </motion.div>
                  </motion.div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-6 left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                    {agent.experience} Experience
                  </div>
                </div>

                {/* Agent Info */}
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {agent.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">{agent.role}</p>
                    <p className="text-gray-600 font-medium">{agent.specialty}</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{agent.clients}</div>
                      <div className="text-sm text-blue-800 font-medium">Success Stories</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">{agent.rating}/5.0</div>
                      <div className="text-sm text-purple-800 font-medium">Client Rating</div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {agent.description}
                  </p>

                  {/* Achievements Tags */}
                  <div className="flex flex-wrap gap-2">
                    {agent.achievements?.slice(0, 2).map((achievement, achIndex) => (
                      <span 
                        key={achIndex}
                        className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Connect Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Connect with {agent.name.split(' ')[0]}</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                </div>

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  animate={{
                    borderColor: hoveredAgent === agent.id 
                      ? "rgb(59 130 246 / 0.3)" 
                      : index === autoRotateIndex && hoveredAgent === null 
                        ? "rgb(147 51 234 / 0.2)" 
                        : "transparent",
                    boxShadow: hoveredAgent === agent.id 
                      ? "0 0 30px rgb(59 130 246 / 0.3)" 
                      : "none"
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-black/10" />
            <motion.div
              className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            
            <div className="relative z-10 space-y-8">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Amazon Business?
                </span>
              </h3>
              
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join 500+ successful Malaysian entrepreneurs who've transformed their businesses with our expert guidance. 
                Schedule your free strategy consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <span className="flex items-center space-x-2">
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  View Success Stories
                </motion.button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center space-x-8 pt-8 text-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm">Expert Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.5%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">FREE</div>
                  <div className="text-sm">Initial Consultation</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
