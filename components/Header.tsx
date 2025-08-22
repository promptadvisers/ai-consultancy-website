'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-heading font-bold gradient-text">
            AI Consultancy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal-gray hover:text-deep-indigo transition-colors dark:text-gray-200 dark:hover:text-vibrant-teal">
              Home
            </Link>
            <Link href="/services" className="text-charcoal-gray hover:text-deep-indigo transition-colors dark:text-gray-200 dark:hover:text-vibrant-teal">
              Services
            </Link>
            <Link href="/about" className="text-charcoal-gray hover:text-deep-indigo transition-colors dark:text-gray-200 dark:hover:text-vibrant-teal">
              About
            </Link>
            <Link href="/case-studies" className="text-charcoal-gray hover:text-deep-indigo transition-colors dark:text-gray-200 dark:hover:text-vibrant-teal">
              Case Studies
            </Link>
            <Link href="/contact" className="text-charcoal-gray hover:text-deep-indigo transition-colors dark:text-gray-200 dark:hover:text-vibrant-teal">
              Contact
            </Link>
            <ThemeToggle />
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-2">
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="w-8 h-0.5 bg-charcoal-gray"
              />
              <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-8 h-0.5 bg-charcoal-gray"
              />
              <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="w-8 h-0.5 bg-charcoal-gray"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <Link href="/" className="block text-charcoal-gray hover:text-deep-indigo transition-colors">
              Home
            </Link>
            <Link href="/services" className="block text-charcoal-gray hover:text-deep-indigo transition-colors">
              Services
            </Link>
            <Link href="/about" className="block text-charcoal-gray hover:text-deep-indigo transition-colors">
              About
            </Link>
            <Link href="/case-studies" className="block text-charcoal-gray hover:text-deep-indigo transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="block text-charcoal-gray hover:text-deep-indigo transition-colors">
              Contact
            </Link>
            <button className="btn-primary w-full">
              Get Started
            </button>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}