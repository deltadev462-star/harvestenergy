import { useEffect } from 'react'
import { GraduationCap, Users, BookOpen, Award, Target, Lightbulb, Shield } from 'lucide-react'

const Training = () => {
  useEffect(() => {
    document.title = 'Training - Harvest Energy | Professional NORM Management Education'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional training programs in NORM management, environmental protection, and radiological safety with onsite and offsite options.')
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            Training Programs
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Empowering Teams with Expert Knowledge in Environmental Protection
          </p>
        </div>
      </section>

      {/* Training Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <GraduationCap className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
              <p className="text-xl text-secondary leading-relaxed mb-6">
                We understand that continuous learning is critical to equipping your team to manage the complexities of environmental protection and NORM management.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Our training programs are designed to enhance both technical knowledge and practical skills in key areas, including NORM management, environmental protection practices, and radiological safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="section-title text-center mb-16">Program Features</h2>
          
          <div className="grid-responsive">
            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Users className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Flexible Delivery</h3>
                <p className="text-secondary">
                  Programs are offered onsite or offsite and structured to improve regulatory compliance, operational safety, and the adoption of advanced decontamination techniques.
                </p>
              </div>
            </div>

            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <BookOpen className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Comprehensive Resources</h3>
                <p className="text-secondary">
                  We provide comprehensive, client-specific educational resources covering environmental permitting, discharge regulations, and operational best practices.
                </p>
              </div>
            </div>

            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Target className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Practical Application</h3>
                <p className="text-secondary">
                  Our training emphasizes real-world application, ensuring your workforce remains fully prepared and informed for the challenges they face in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-16">Key Training Areas</h2>
            
            <div className="space-y-6">
              {/* NORM Management */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">NORM Management</h3>
                    <p className="text-secondary mb-4">
                      Comprehensive understanding of Naturally Occurring Radioactive Materials, including identification, assessment, handling procedures, and regulatory requirements.
                    </p>
                    <ul className="space-y-2 text-secondary">
                      <li>• NORM fundamentals and radiological principles</li>
                      <li>• Detection and measurement techniques</li>
                      <li>• Safe handling and storage procedures</li>
                      <li>• Regulatory compliance and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Environmental Protection */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Environmental Protection Practices</h3>
                    <p className="text-secondary mb-4">
                      Best practices for environmental stewardship, pollution prevention, and sustainable operations in the energy sector.
                    </p>
                    <ul className="space-y-2 text-secondary">
                      <li>• Environmental impact assessment</li>
                      <li>• Pollution prevention strategies</li>
                      <li>• Waste minimization techniques</li>
                      <li>• Environmental monitoring and reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Radiological Safety */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Radiological Safety</h3>
                    <p className="text-secondary mb-4">
                      Essential radiological protection principles, safety protocols, and emergency response procedures to protect workers and the public.
                    </p>
                    <ul className="space-y-2 text-secondary">
                      <li>• Radiation protection fundamentals</li>
                      <li>• Personal protective equipment (PPE) selection and use</li>
                      <li>• Emergency response procedures</li>
                      <li>• Health surveillance and dose monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
            Invest in Your Team's Excellence
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Equip your workforce with the knowledge and skills they need to excel in NORM management and environmental protection.
          </p>
          <p className="text-lg mb-8">
            Contact us to develop a customized training program tailored to your organization's specific needs.
          </p>
          <a
            href="/get-in-touch"
            className="btn btn-secondary text-lg inline-flex items-center"
          >
            Schedule Training Consultation
          </a>
        </div>
      </section>
    </>
  )
}

export default Training