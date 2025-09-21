
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Star, X } from 'lucide-react'

const portfolioItems = [
  {
    title: "Account Setup",
    subtitle: "Complete Amazon seller setup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "FBA Logistics", 
    subtitle: "Streamlined fulfillment solutions",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Product Research",
    subtitle: "Data-driven market analysis", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Marketing & PPC",
    subtitle: "Growth-focused advertising",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop", 
    color: "from-orange-500 to-red-500"
  }
]

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Senior Strategy Consultant", 
    image: "https://i.ytimg.com/vi/w3Lk5WgUBR0/mqdefault.jpg",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Ahmad Rashid", 
    role: "FBA Logistics Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    color: "from-purple-400 to-purple-600"
  },
  {
    name: "Priya Kumar",
    role: "Product Research Expert", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    color: "from-pink-400 to-pink-600"
  }
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Home')
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleStartJourney = () => {
    scrollToSection('contact')
  }

  const handleViewPortfolio = () => {
    scrollToSection('portfolio')
  }

  const handleLearnMore = (service: string) => {
    setActivePopup(service)
    // Auto-close after 5 seconds
    setTimeout(() => setActivePopup(null), 5000)
  }

  const handleClosePopup = () => {
    setActivePopup(null)
  }

  const handleContact = () => {
    setActivePopup('contact')
    setTimeout(() => setActivePopup(null), 4000)
  }

  const handleScheduleConsultation = () => {
    setActivePopup('consultation')
    setTimeout(() => setActivePopup(null), 4000)
  }

  const getPopupContent = (service: string) => {
    const contents: Record<string, { title: string; description: string; features: string[] }> = {
      'Account Setup': {
        title: 'Complete Amazon Seller Setup',
        description: 'Get your Amazon seller account fully optimized and ready to sell.',
        features: [
          '✓ Account registration and verification',
          '✓ Tax and legal compliance setup', 
          '✓ Brand registry assistance',
          '✓ Store customization and optimization'
        ]
      },
      'FBA Logistics': {
        title: 'Streamlined Fulfillment Solutions',
        description: 'End-to-end logistics management for your Amazon FBA business.',
        features: [
          '✓ Inventory management and forecasting',
          '✓ Shipping and prep services',
          '✓ Returns and customer service',
          '✓ Cost optimization strategies'
        ]
      },
      'Product Research': {
        title: 'Data-Driven Market Analysis',
        description: 'Find profitable products with our advanced research tools and expertise.',
        features: [
          '✓ Market trend analysis and forecasting',
          '✓ Competitor research and positioning',
          '✓ Profit margin calculations',
          '✓ Sourcing recommendations'
        ]
      },
      'Marketing & PPC': {
        title: 'Growth-Focused Advertising',
        description: 'Maximize your sales with targeted Amazon advertising campaigns.',
        features: [
          '✓ PPC campaign setup and optimization',
          '✓ Keyword research and bidding',
          '✓ Performance tracking and reporting',
          '✓ Brand awareness campaigns'
        ]
      },
      'contact': {
        title: 'Thank You!',
        description: 'Your interest has been noted. Our team will contact you within 24 hours.',
        features: ['📞 Phone consultation', '📧 Email follow-up', '📋 Customized proposal']
      },
      'consultation': {
        title: 'Consultation Scheduled!',
        description: 'Your free consultation has been booked. An expert will call you within 24 hours.',
        features: ['🎯 Personalized strategy', '💡 Expert insights', '📈 Growth planning']
      }
    }
    return contents[service] || { title: service, description: 'Contact us for more details.', features: [] }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">Amazon Sellers Network</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', section: 'hero' },
                { name: 'About', section: 'portfolio' }, 
                { name: 'Portfolio', section: 'portfolio' },
                { name: 'Contact', section: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name)
                    if (item.name === 'Home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else {
                      scrollToSection(item.section)
                    }
                  }}
                  className={`text-gray-600 hover:text-gray-900 font-medium transition-colors ${
                    activeTab === item.name ? 'text-gray-900' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            <Button onClick={handleStartJourney} className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Amazon Sellers
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Network Malaysia
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empowering Malaysian entrepreneurs to succeed on Amazon with expert guidance, 
                  logistics support, and proven strategies for global marketplace domination.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleStartJourney} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full">
                  Start Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleViewPortfolio} className="border-gray-300 px-8 py-4 rounded-full">
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            {/* Right Content - 3D Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[600px]"
            >
              {/* Main Person Image */}
              <div className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                  alt="Amazon Seller Success"
                  fill
                  className="object-cover rounded-2xl"
                />
                
                {/* Floating UI Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-8 top-16 bg-white rounded-2xl shadow-xl p-4 w-48"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">98.5%</p>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-6 bottom-20 bg-white rounded-2xl shadow-xl p-4 w-44"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      RM 2.3M
                    </p>
                    <p className="text-sm text-gray-600">Monthly Sales</p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-8 left-0 grid grid-cols-2 gap-3 w-72"
              >
                {portfolioItems.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`relative h-32 rounded-2xl bg-gradient-to-br ${item.color} p-4 text-white overflow-hidden`}
                  >
                    <div className="relative z-10">
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs opacity-90">{item.subtitle}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </motion.div>
                ))}
              </motion.div>

              {/* 3D Wave Element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6 mb-16"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="CEO"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Malaysian Amazon Experts</h2>
              <p className="text-gray-600">Proven track record</p>
              <p className="text-sm text-gray-500 mt-2 max-w-md">
                Transform your business with our comprehensive Amazon selling solutions designed specifically for Malaysian entrepreneurs.
              </p>
            </div>
            <div className="flex space-x-4 ml-auto">
              {[
                { icon: Linkedin, color: "bg-blue-600" },
                { icon: Twitter, color: "bg-red-500" },  
                { icon: Instagram, color: "bg-purple-600" },
                { icon: Mail, color: "bg-gray-600" }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* About Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-8">About</h3>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className={`relative h-48 rounded-3xl overflow-hidden bg-gradient-to-br ${item.color} text-white cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="relative p-6 h-full flex flex-col justify-end">
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                    <Button variant="secondary" size="sm" onClick={() => handleLearnMore(item.title)} className="mt-3 w-fit bg-white/20 hover:bg-white/30 text-white border-0">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${member.color} text-white h-24 cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="relative p-6 flex items-center space-x-4 h-full">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Animated Popup */}
          {activePopup && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={handleClosePopup}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 mx-4"
                initial={{ scale: 0.8, rotateX: -10 }}
                animate={{ scale: 1, rotateX: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Close Button */}
                <button
                  onClick={handleClosePopup}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Popup Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {getPopupContent(activePopup).title}
                    </h3>
                    <p className="text-gray-600">
                      {getPopupContent(activePopup).description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {getPopupContent(activePopup).features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClosePopup}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all"
                  >
                    Contact Us Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Contact Info Columns */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Get In Touch</h4>
              <div className="space-y-4 text-gray-600">
                <p className="text-sm">Ready to start your Amazon journey?</p>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                  <Button onClick={handleContact} className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Services</h4>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>Account Setup</p>
                <p>FBA Logistics</p>
                <p>Product Research</p>
                <p>PPC Management</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Support</h4>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>24/7 Expert Help</p>
                <p>Training Videos</p>
                <p>Success Stories</p>
                <p>Documentation</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Contact</h4>
              <div className="space-y-4 text-gray-600 text-sm">
                <p>Connect with top-tier Malaysian Amazon experts and transform your business today.</p>
                <Button onClick={handleScheduleConsultation} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>© 2024 Amazon Sellers Network</span>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Follow us:</span>
              {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                <button key={index} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Icon className="w-4 h-4 text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
