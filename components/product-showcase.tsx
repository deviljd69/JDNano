
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Star, ShoppingCart, Heart } from 'lucide-react'

interface Product {
  id: number
  name: string
  image: string
  price: string
  rating: number
}

interface ProductShowcaseProps {
  products: Product[]
  activeProduct: number
  mousePosition: { x: number; y: number }
}

export function ProductShowcase({ products, activeProduct, mousePosition }: ProductShowcaseProps) {
  const currentProduct = products[activeProduct]

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Main Product Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          {/* Product Image with 3D Effect */}
          <motion.div
            className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
            animate={{
              rotateX: (mousePosition.y - 400) / 50,
              rotateY: (mousePosition.x - 400) / 50,
            }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <Image
              src={currentProduct?.image || ''}
              alt={currentProduct?.name || ''}
              fill
              className="object-cover"
              sizes="(max-width: 320px) 320px, 320px"
            />
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Product Info Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 left-4 right-4 text-white"
            >
              <h3 className="font-semibold text-lg mb-2">{currentProduct?.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{currentProduct?.rating}</span>
                </div>
                <div className="text-xl font-bold">{currentProduct?.price}</div>
              </div>
            </motion.div>

            {/* Interactive Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-4 flex flex-col space-y-2"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600/80 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Product Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products?.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === activeProduct ? 'bg-blue-400' : 'bg-white/30'
            }`}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: index === activeProduct ? 1.2 : 1,
            }}
          />
        ))}
      </div>

      {/* Floating Product Thumbnails */}
      <div className="absolute inset-0">
        {products?.map((product, index) => {
          if (index === activeProduct) return null
          
          const angle = (index * 72) * Math.PI / 180 // 360/5 = 72 degrees apart
          const radius = 200
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={product?.id}
              className="absolute w-20 h-20 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: x - 40,
                marginTop: y - 40,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <Image
                src={product?.image || ''}
                alt={product?.name || ''}
                fill
                className="object-cover"
                sizes="80px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-1 left-1 right-1">
                <div className="text-white text-xs font-medium truncate">
                  {product?.name}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
