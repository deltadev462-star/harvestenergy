import { useEffect } from 'react'
import { FileText, Shield, CheckCircle, Scale, Heart, Zap, Globe } from 'lucide-react'

const HarvestPolicy = () => {
  useEffect(() => {
    document.title = 'Harvest Policy - Harvest Energy | Quality, Safety & Environmental Standards'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Harvest Energy is committed to upholding the highest standards of quality, safety, and environmental protection across all our consultations.')
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            General Policy
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Our Commitment to Excellence, Safety, and Environmental Stewardship
          </p>
        </div>
      </section>

      {/* Policy Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-secondary leading-relaxed text-center mb-12">
              Harvest Energy is committed to upholding the highest standards of quality, safety, and environmental protection across all our consultations. Our policy is founded on the following principles:
            </p>
          </div>
        </div>
      </section>

      {/* Policy Principles */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Principle 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Ensure the Health and Safety of Workers and the Public</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      We implement and maintain rigorous safety protocols to protect individuals and communities from the risks associated with radiation and environmental hazards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Globe className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Maintain Environmental Integrity</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      We prioritize sustainable practices and responsible environmental stewardship, ensuring our consulting minimizes ecological impact and promotes long-term environmental health.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Zap className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Strive for Excellence</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      We are committed to technical excellence, ensuring that every project is executed with the utmost precision, care, and professional expertise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Scale className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Adhere to Legal and Ethical Standards</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      We operate in full compliance with all applicable environmental regulations, maintaining ethical conduct in all aspects of our business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 5 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Promote Accountability and Transparency</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      We take full responsibility for our actions and communicate openly with stakeholders, ensuring transparency and trustworthiness in every project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 6 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Foster Innovation and Adaptability</h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      We embrace continuous improvement and adapt to evolving industry and regulatory demands, ensuring our clients benefit from the latest advancements in environmental and radiological sciences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSSE & Q Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">HSSE & Q</h2>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12">
              <Heart className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <p className="text-lg text-primary-800 leading-relaxed mb-6">
                Harvest Energy embraces organizational and operational excellence as fundamental enablers for the development and implementation of its Health, Safety, Sustainability, Environment, and Quality (HSSE & Q) Management System. This system ensures the protection of the health and safety of employees, contractors, and visitors, safeguards the environment, and promotes the safe operation of all services.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">In pursuit of these objectives, Harvest Energy is committed to:</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-primary-800">Ensuring full compliance with HSSE requirements and other applicable regulations, including customer-specific requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-primary-800">Identifying occupational health and safety risks and implementing effective mitigation measures throughout the lifecycle of all activities to prevent incidents, injuries, and occupational illness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-primary-800">Establishing measures to minimize the environmental impact of our services, prevent pollution, and reduce HSSE incidents affecting stakeholders and the environment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-primary-800">Integrating Harvest Energy's HSSE management and reporting systems into existing business processes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-primary-800">Promoting and safeguarding the well-being of our workforce and the wider community.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-primary-800">Reducing potential impacts on the natural environment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-primary-800">Supporting the long-term economic growth and prosperity of Egypt.</span>
                </li>
              </ul>
            </div>

            {/* Continual Improvement */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-center mb-8">Continual Improvement Objectives</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "The health, safety, and welfare of employees, contractors, visitors, and local communities",
                  "Environmental protection and continuous enhancement of environmental performance",
                  "Effective occupational health and safety management, ensuring a high-performance, incident-free workplace",
                  "Minimization of waste generation and emissions",
                  "Development of a behavior-based safety culture",
                  "Engagement and involvement of all personnel",
                  "Customer and stakeholder satisfaction",
                  "Integrity and protection of core assets"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Policy Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-12">Legal Policy</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">CODE OF CONDUCT</h3>
                <div className="space-y-3 text-left">
                  <p className="text-slate-300">• We comply with all applicable national laws and regulations in the MENA region, GCC countries, Africa, and other jurisdictions.</p>
                  <p className="text-slate-300">• We always comply with the competition and anti-trust laws that apply to our business, both domestically and globally. We are committed to avoiding conflicts of interest wherever possible.</p>
                  <p className="text-slate-300">• We have zero tolerance for any form of bribery or corruption.</p>
                  <p className="text-slate-300">• Money laundering supports criminal activity, including drug trafficking, terrorism, corruption and tax evasion and we are committed to ensuring that our business does not inadvertently facilitate such activities.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">COPYRIGHT</h3>
                <p className="text-slate-300">
                  All information, documents, logo types, texts, images are subject to laws protecting copyright and may not use them without prior written authorization from the HARVEST ENERGY.
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-xl font-semibold">Mesbah TAWFIK</p>
              <p className="text-slate-300">Counselor, International Court UK</p>
              <p className="text-slate-300">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HarvestPolicy