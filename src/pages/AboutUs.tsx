import { useEffect } from 'react'
import { Shield, Target, Globe, Award } from 'lucide-react'

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - Harvest Energy | ISO-certified NORM Consulting'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Harvest Energy is an ISO-certified private entity and the first dedicated provider of NORM consulting across the MENA region, GCC, and Africa.')
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            About Us
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            The First Dedicated Provider of NORM Consulting Across MENA, GCC & Africa
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Harvest Energy is an ISO-certified private entity and the first dedicated provider of NORM consulting across the MENA region, GCC, and Africa, established and licensed by the Ministry of Environment and Climate Change (MoECC).
            </p>
            
            <p className="text-lg text-secondary leading-relaxed mb-8">
              We specialize in delivering top-tier consulting with a focus on the safe and effective management of Naturally Occurring Radioactive Materials (NORM) and Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM).
            </p>

            <p className="text-lg text-secondary leading-relaxed mb-8">
              As an independent energy consulting firm, we provide a comprehensive suite of solutions designed to address the complex regulatory, operational, and environmental challenges faced by our clients.
            </p>

            <p className="text-lg text-secondary leading-relaxed mb-8">
              We are also committed to advancing environmental awareness and offering professional training and education on industry best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="section-title text-center mb-16">Our Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Client-Centric Excellence</h3>
              <p className="text-secondary leading-relaxed">
                Our regional expertise, professionalism, and strong client-centric approach distinguish the consultations we provide. Each engagement is tailored to the specific requirements of the project, ensuring optimal outcomes in both operational efficiency and environmental protection.
              </p>
              <p className="text-secondary leading-relaxed">
                A key achievement of Harvest Energy is the cultivation of long-term, trusted relationships with our clients, which has facilitated the expansion of our business network across the Middle East, GCC, and Africa.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Technical Expertise</h3>
              <p className="text-secondary leading-relaxed">
                Our team of highly qualified radiation protection and environmental professionals is dedicated to delivering end-to-end solutions that mitigate the environmental impacts of the oil and gas sector while promoting sustainable development through responsible environmental stewardship.
              </p>
              <p className="text-secondary leading-relaxed">
                Leveraging decades of experience, our experts provide consultations spanning regulatory compliance, environmental discharge management, and safe disposal, ensuring that our clients consistently meet the highest standards of safety and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-16">Our Core Values</h2>
          
          <div className="grid-responsive">
            <div className="text-center">
              <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Safety First</h3>
              <p className="text-secondary">
                Prioritizing the health and safety of personnel, communities, and the environment in all our operations.
              </p>
            </div>
            
            <div className="text-center">
              <Target className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Precision & Excellence</h3>
              <p className="text-secondary">
                Delivering accurate, comprehensive solutions with meticulous attention to detail and quality.
              </p>
            </div>
            
            <div className="text-center">
              <Globe className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Environmental Stewardship</h3>
              <p className="text-secondary">
                Committed to sustainable practices and minimizing environmental impact across all industries we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Badge */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container text-center">
          <Award className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold mb-4">ISO Certified Excellence</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Our ISO certification reflects our commitment to maintaining the highest standards of quality, safety, and environmental management in all our consulting services.
          </p>
        </div>
      </section>
    </>
  )
}

export default AboutUs