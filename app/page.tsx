import AuditForm from '@/components/AuditForm'
import ParticleField from '@/components/ParticleField'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with AI Visualization */}
      <section className="relative overflow-hidden bg-gradient-to-br from-off-white via-soft-lavender/20 to-vibrant-teal/10 dark:from-gray-900 dark:via-deep-indigo/20 dark:to-vibrant-teal/10 min-h-screen flex items-center">
        <ParticleField />
        <div className="container mx-auto container-padding section-padding relative z-10">
          <div className="asymmetric-grid">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="gradient-text leading-tight">
                Unlock AI for Your Business
              </h1>
              <p className="text-xl text-charcoal-gray/80 max-w-2xl mx-auto lg:mx-0">
                From prompts to profits: We make AI work for you. Expert integration, optimization, and custom development for SMBs ready to transform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#audit-form" className="btn-audit inline-block text-center">
                  AUDIT MY BUSINESS
                </a>
                <button className="btn-secondary">
                  View Services
                </button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] order-first lg:order-last">
              {/* Interactive AI Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-deep-indigo/20 to-vibrant-teal/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-vibrant-teal/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-deep-indigo/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-br from-soft-lavender/10 to-transparent">
        <div className="container mx-auto container-padding">
          <h2 className="text-center mb-16 gradient-text">
            Transform Your Business with AI
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 card-hover shadow-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-deep-indigo to-vibrant-teal rounded-xl mb-6 flex items-center justify-center icon-hover">
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </div>
              <h3 className="text-2xl mb-4 text-deep-indigo" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>AI Integration</h3>
              <p className="text-charcoal-gray/70 leading-relaxed">
                Seamlessly integrate AI into your existing workflows. We identify opportunities and implement solutions that deliver real ROI.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 card-hover shadow-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-teal to-lime-green rounded-xl mb-6 flex items-center justify-center icon-hover">
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </div>
              <h3 className="text-2xl mb-4 text-deep-indigo" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>Prompt Optimization</h3>
              <p className="text-charcoal-gray/70 leading-relaxed">
                Master the art of AI communication. We optimize prompts for video, image, and text generation to get perfect results every time.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 card-hover shadow-xl border border-white/20 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-green to-deep-indigo rounded-xl mb-6 flex items-center justify-center icon-hover">
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </div>
              <h3 className="text-2xl mb-4 text-deep-indigo" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>Custom Apps</h3>
              <p className="text-charcoal-gray/70 leading-relaxed">
                Get custom AI-powered applications built for your specific needs. Affordable, scalable solutions that grow with your business.
              </p>
            </div>
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
                    <p className="font-semibold text-deep-indigo text-lg" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>Sarah Chen</p>
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