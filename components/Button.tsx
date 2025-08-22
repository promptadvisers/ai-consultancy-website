'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'audit' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-deep-indigo text-white hover:shadow-xl hover:scale-105',
      secondary: 'bg-vibrant-teal text-white hover:shadow-xl hover:scale-105', 
      audit: 'bg-lime-green text-charcoal-gray font-bold uppercase hover:animate-glow hover:scale-110 shadow-lg bg-gradient-to-r from-lime-green to-[#3FFF3F]',
      outline: 'border-2 border-deep-indigo text-deep-indigo hover:bg-deep-indigo hover:text-white',
      ghost: 'text-charcoal-gray hover:bg-gray-100',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'font-semibold rounded-lg transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button