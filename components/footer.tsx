
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Amazon Sellers Network</h3>
              <p className="text-gray-400 leading-relaxed">
                Malaysia's premier Amazon selling partner, empowering local businesses 
                to achieve global success through expert guidance and proven strategies.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+60 3-2161 2000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@amazonsellersnetwork.my</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold">Our Services</h4>
            <div className="space-y-3">
              {[
                "Amazon Account Setup",
                "FBA & Logistics Support",
                "Product Research & Optimization",
                "Marketing & Advertising"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold">Start Your Journey</h4>
            <p className="text-gray-400">
              Ready to scale your business on Amazon? Get in touch with our experts today.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full rounded-full group">
              Get Free Consultation
              <motion.div
                className="ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Amazon Sellers Network. Empowering Malaysian businesses globally.</p>
        </motion.div>
      </div>
    </footer>
  )
}
