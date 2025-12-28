import { useEffect } from 'react'
import { Eye, Target, Users, Lightbulb } from 'lucide-react'

const Vision = () => {
  useEffect(() => {
    document.title = 'Vision - Harvest Energy | Environmental and Sustainability Goals'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Harvest Energy prioritizes close collaboration with clients to achieve operational, environmental, and sustainability objectives through comprehensive radiological assessments.')
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            Our Vision
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Leading the Path to Sustainable Environmental Excellence
          </p>
        </div>
      </section>

      {/* Main Vision Statement */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Eye className="w-20 h-20 text-emerald-600 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl leading-relaxed font-semibold text-primary-800 mb-8">
              Harvest Energy prioritizes close collaboration with our clients to support the achievement of their operational, environmental, and sustainability objectives.
            </p>
            
            <p className="text-lg text-secondary leading-relaxed mb-6">
              We provide comprehensive radiological assessments, tailored radiation protection strategies, and detailed environmental evaluations to address complex technical and regulatory challenges.
            </p>
            
            <p className="text-lg text-secondary leading-relaxed">
              Our aim is to assist businesses in fulfilling their environmental responsibilities while ensuring that the health and safety of both the public and workforce remain paramount.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="section-title text-center mb-16">Our Vision Pillars</h2>
          
          <div className="grid-responsive">
            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Target className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Client Collaboration</h3>
                <p className="text-secondary">
                  Building strong partnerships with our clients to understand and achieve their unique operational and environmental goals through tailored solutions.
                </p>
              </div>
            </div>
            
            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Users className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Health & Safety</h3>
                <p className="text-secondary">
                  Ensuring the protection of public health and workforce safety remains at the forefront of all our environmental and radiological strategies.
                </p>
              </div>
            </div>
            
            <div className="card hover:shadow-2xl">
              <div className="card-body text-center">
                <Lightbulb className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Sustainable Development</h3>
                <p className="text-secondary">
                  Promoting sustainable practices and innovative solutions that balance operational excellence with environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">Looking Forward</h2>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-primary-800 leading-relaxed mb-6">
                Through our expertise and solutions, we strive to promote sustainable development across the industries we serve. Our vision extends beyond mere compliance to actively shape a future where industrial operations and environmental stewardship coexist harmoniously.
              </p>
              
              <p className="text-lg text-primary-800 leading-relaxed">
                We envision a world where every organization has access to expert guidance in managing radiological risks, implementing effective environmental protection measures, and achieving their sustainability goals while maintaining operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Vision