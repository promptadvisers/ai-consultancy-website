import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal-gray text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading mb-4 text-vibrant-teal">
              AI Consultancy
            </h3>
            <p className="text-gray-300">
              Democratizing AI for SMBs. Transform your business with intelligent automation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-vibrant-teal">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#integration" className="text-gray-300 hover:text-vibrant-teal transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services#prompt" className="text-gray-300 hover:text-vibrant-teal transition-colors">
                  Prompt Optimization
                </Link>
              </li>
              <li>
                <Link href="/services#custom" className="text-gray-300 hover:text-vibrant-teal transition-colors">
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-vibrant-teal">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-vibrant-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-vibrant-teal transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-vibrant-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-vibrant-teal">Connect</h4>
            <p className="text-gray-300 mb-4">
              Ready to transform your business?
            </p>
            <button className="btn-audit w-full">
              AUDIT MY BUSINESS
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AI Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}