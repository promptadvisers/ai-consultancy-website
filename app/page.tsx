'use client'

import AuditForm from '@/components/AuditForm'
import ParticleField from '@/components/ParticleField'
import Button from '@/components/Button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with AI Visualization */}
      <section className="relative overflow-hidden bg-gradient-to-br from-off-white via-soft-lavender/20 to-vibrant-teal/10 dark:from-gray-900 dark:via-deep-indigo/20 dark:to-vibrant-teal/10 min-h-screen flex items-center">
        <ParticleField />
        <div className="container mx-auto container-padding section-padding relative z-10">
          <div className="asymmetric-grid">
            <motion.div 
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="gradient-text leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Unlock AI for Your Business
              </motion.h1>
              <motion.p 
                className="text-xl text-charcoal-gray/80 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                From prompts to profits: We make AI work for you. Expert integration, optimization, and custom development for SMBs ready to transform.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.a 
                  href="#audit-form" 
                  className="btn-audit inline-block text-center"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(50, 205, 50, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  AUDIT MY BUSINESS
                </motion.a>
                <motion.button 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 191, 165, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative h-[400px] lg:h-[600px] order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              {/* Interactive AI Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-deep-indigo/20 to-vibrant-teal/20 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-vibrant-teal/30 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 0.8, 1.2, 1],
                    rotate: [0, -180, -360],
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                <motion.div 
                  className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-deep-indigo/30 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.3, 0.9, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 4
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-br from-soft-lavender/10 to-transparent">
        <div className="container mx-auto container-padding">
          <motion.h2 
            className="text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Transform Your Business with AI
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 card-hover shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-deep-indigo to-vibrant-teal rounded-xl mb-6 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </motion.div>
              <h3 className="text-2xl mb-4 text-deep-indigo font-heading">AI Integration</h3>
              <p className="text-charcoal-gray/70 leading-relaxed">
                Seamlessly integrate AI into your existing workflows. We identify opportunities and implement solutions that deliver real ROI.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 card-hover shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-vibrant-teal to-lime-green rounded-xl mb-6 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </motion.div>
              <h3 className="text-2xl mb-4 text-deep-indigo font-heading">Prompt Optimization</h3>
              <p className="text-charcoal-gray/70 leading-relaxed">
                Master the art of AI communication. We optimize prompts for video, image, and text generation to get perfect results every time.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 card-hover shadow-xl border border-white/20 sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-lime-green to-deep-indigo rounded-xl mb-6 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </motion.div>
              <h3 className="text-2xl mb-4 text-deep-indigo font-heading">Custom Apps</h3>
              <p className="text-charcoal-gray/70 leading-relaxed">
                Get custom AI-powered applications built for your specific needs. Affordable, scalable solutions that grow with your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-deep-indigo/5 to-vibrant-teal/5">
        <div className="container mx-auto container-padding">
          <h2 className="text-center mb-16 gradient-text">
            Success Stories
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/30 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vibrant-teal/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-deep-indigo/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <p className="text-xl lg:text-2xl italic mb-8 text-charcoal-gray/80 leading-relaxed">
                  "They helped us automate 40% of our customer service with AI, saving us 20 hours per week. The ROI was immediate and impressive."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-deep-indigo to-vibrant-teal rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-deep-indigo text-lg font-heading">Sarah Chen</p>
                    <p className="text-charcoal-gray/60">CEO, TechStart Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Audit Form */}
      <section id="audit-form" className="section-padding bg-gradient-to-br from-soft-lavender/10 to-vibrant-teal/5">
        <div className="container mx-auto container-padding">
          <AuditForm />
        </div>
      </section>
    </main>
  )
}