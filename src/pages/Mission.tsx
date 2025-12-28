import { useEffect } from 'react'
import { Target, Shield, Zap, Leaf } from 'lucide-react'

const Mission = () => {
  useEffect(() => {
    document.title = 'Mission - Harvest Energy | Environmental Solutions & Compliance'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Harvest Energy delivers customized, efficient, and innovative environmental solutions that enable informed decision-making based on radiological and environmental legislation.')
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            Our Mission
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Delivering Innovative Environmental Solutions for a Sustainable Future
          </p>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-20 h-20 text-emerald-600 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl leading-relaxed font-semibold text-primary-800 mb-8">
              Harvest Energy is to deliver customized, efficient, and innovative environmental solutions that enable informed decision-making.
            </p>
            
            <p className="text-lg text-secondary leading-relaxed mb-6">
              We base our work on a thorough understanding of radiological and environmental legislation, international safety standards, regulatory guidelines, and the latest advancements in environmental and radiation protection science and technology.
            </p>
            
            <p className="text-lg text-secondary leading-relaxed">
              We are committed to supporting our clients in addressing complex technical challenges while ensuring regulatory compliance and promoting sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Components */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="section-title text-center mb-16">Our Commitment</h2>
          
          <div className="grid-responsive">
            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Environmental Protection</h3>
                <p className="text-secondary">
                  Achieving the highest standards of environmental protection while safeguarding public and worker health through comprehensive solutions.
                </p>
              </div>
            </div>
            
            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Zap className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Technological Efficiency</h3>
                <p className="text-secondary">
                  Optimizing both technological efficiency and economic performance through innovative approaches and cutting-edge solutions.
                </p>
              </div>
            </div>
            
            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Leaf className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Sustainable Practices</h3>
                <p className="text-secondary">
                  Promoting sustainable development and responsible environmental stewardship in all our consultations and solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">Our Focus</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Regulatory Excellence</h3>
                <p className="text-lg text-secondary leading-relaxed">
                  Our focus is on providing solutions that achieve the highest standards of environmental protection, safeguard public and worker health, and optimize both technological efficiency and economic performance. We ensure full compliance with all applicable regulations and international standards.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Innovation & Technology</h3>
                <p className="text-lg text-secondary leading-relaxed">
                  We stay at the forefront of environmental and radiation protection science and technology, integrating the latest advancements into our solutions to provide our clients with the most effective and efficient approaches to their challenges.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Partnership & Support</h3>
                <p className="text-lg text-secondary leading-relaxed">
                  We are dedicated to building long-term partnerships with our clients, providing continuous support and expertise as they navigate complex technical and regulatory landscapes while maintaining their commitment to environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mission