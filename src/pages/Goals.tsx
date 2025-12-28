import { useEffect } from 'react'
import { CheckCircle, TrendingUp, Users, Lightbulb, Shield } from 'lucide-react'

const Goals = () => {
  useEffect(() => {
    document.title = 'Goals - Harvest Energy | Sustainable and Cost-effective Solutions'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Harvest Energy delivers sustainable and cost-effective solutions meeting the highest industrial, environmental, and radiological safety standards.')
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            Our Goals
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Driving Excellence in Environmental and Radiological Safety
          </p>
        </div>
      </section>

      {/* Main Goals Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-secondary leading-relaxed">
                Our goals reflect our commitment to excellence, innovation, and sustainable practices in everything we do.
              </p>
            </div>

            {/* Goal Cards */}
            <div className="space-y-8">
              {/* Goal 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Deliver Sustainable and Cost-effective Solutions</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      Providing strategies that meet the highest industrial, environmental, and radiological safety standards while ensuring economic viability and long-term sustainability for our clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Protect Human Health and the Environment</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      Minimizing the environmental impacts associated with NORM and TENORM management and safeguarding the health of workers and the public through the implementation of effective radiation protection plans.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Users className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Foster Long-term Partnerships</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      Clearly identifying client needs, actively incorporating feedback, and delivering tailored solutions that build trusted, enduring relationships with our clients across the MENA region, GCC, and Africa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Drive Innovation</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      Developing creative and forward-looking solutions to address emerging operational, regulatory, and environmental challenges in the rapidly evolving energy sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-primary-800 leading-relaxed">
              Through these goals, Harvest Energy continues to lead the way in providing comprehensive, innovative solutions that protect human health and the environment while supporting the sustainable growth of the energy sector. We measure our success not just by the projects we complete, but by the lasting positive impact we create for our clients, communities, and the environment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Goals