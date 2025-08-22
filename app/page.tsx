import AuditForm from '@/components/AuditForm'
import ParticleField from '@/components/ParticleField'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with AI Visualization */}
      <section className="relative overflow-hidden bg-gradient-to-br from-off-white via-soft-lavender/20 to-vibrant-teal/10 dark:from-gray-900 dark:via-deep-indigo/20 dark:to-vibrant-teal/10 min-h-screen flex items-center">
        <ParticleField />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="asymmetric-grid items-center">
            <div className="space-y-8">
              <h1 className="gradient-text leading-tight">
                Unlock AI for Your Business
              </h1>
              <p className="text-xl text-charcoal-gray/80 max-w-2xl">
                From prompts to profits: We make AI work for you. Expert integration, optimization, and custom development for SMBs ready to transform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#audit-form" className="btn-audit inline-block text-center">
                  AUDIT MY BUSINESS
                </a>
                <button className="btn-secondary">
                  View Services
                </button>
              </div>
            </div>
            <div className="relative h-[600px]">
              {/* Placeholder for AI Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-deep-indigo/20 to-vibrant-teal/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute w-64 h-64 bg-vibrant-teal/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute w-48 h-48 bg-deep-indigo/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-center mb-16 gradient-text">
            Transform Your Business with AI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 card-hover shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-deep-indigo to-vibrant-teal rounded-lg mb-6"></div>
              <h3 className="text-2xl mb-4 text-deep-indigo">AI Integration</h3>
              <p className="text-charcoal-gray/70">
                Seamlessly integrate AI into your existing workflows. We identify opportunities and implement solutions that deliver real ROI.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-teal to-lime-green rounded-lg mb-6"></div>
              <h3 className="text-2xl mb-4 text-deep-indigo">Prompt Optimization</h3>
              <p className="text-charcoal-gray/70">
                Master the art of AI communication. We optimize prompts for video, image, and text generation to get perfect results every time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-green to-deep-indigo rounded-lg mb-6"></div>
              <h3 className="text-2xl mb-4 text-deep-indigo">Custom Apps</h3>
              <p className="text-charcoal-gray/70">
                Get custom AI-powered applications built for your specific needs. Affordable, scalable solutions that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-soft-lavender/20 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-center mb-16 gradient-text">
            Success Stories
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <p className="text-xl italic mb-6 text-charcoal-gray/80">
                "They helped us automate 40% of our customer service with AI, saving us 20 hours per week. The ROI was immediate and impressive."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-indigo to-vibrant-teal rounded-full"></div>
                <div>
                  <p className="font-semibold text-deep-indigo">Sarah Chen</p>
                  <p className="text-charcoal-gray/60">CEO, TechStart Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Audit Form */}
      <section id="audit-form" className="py-20 px-6 bg-gradient-to-br from-soft-lavender/10 to-vibrant-teal/5">
        <div className="container mx-auto">
          <AuditForm />
        </div>
      </section>
    </main>
  )
}