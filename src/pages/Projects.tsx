import { useEffect } from 'react'
import AnimatedGallery from '../components/AnimatedGallery'
import { Briefcase } from 'lucide-react'

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects - Harvest Energy | Case Studies & Success Stories'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Harvest Energy\'s successful NORM management projects and environmental solutions across MENA, GCC, and Africa.')
    }
  }, [])

  // Using local images from public folder
  const projects = [
    {
      id: 1,
      title: 'Major Oil Field NORM Assessment',
      category: 'NORM Surveys',
      description: 'Comprehensive NORM survey and assessment for a major oil field in the GCC region, covering 150+ facilities and establishing new safety protocols.',
      imageUrl: '/photo-1.jpg'
    },
    {
      id: 2,
      title: 'Refinery Decontamination Project',
      category: 'Remediation Solutions',
      description: 'Successfully decontaminated and remediated a 30-year-old refinery facility, reducing NORM levels by 95% while maintaining operational continuity.',
      imageUrl: '/photo-2.jpg'
    },
    {
      id: 3,
      title: 'Environmental Compliance Audit',
      category: 'Regulatory Compliance',
      description: 'Conducted comprehensive compliance audit for multinational energy company, ensuring adherence to MoECC regulations across 12 facilities.',
      imageUrl: '/photo-3.jpg'
    },
    {
      id: 4,
      title: 'Offshore Platform Safety Assessment',
      category: 'Radiological Impact',
      description: 'Radiological impact assessment for offshore drilling platforms, implementing new safety measures that reduced exposure risks by 80%.',
      imageUrl: '/photo-4.jpg'
    },
    {
      id: 5,
      title: 'Waste Management System Design',
      category: 'Waste Management',
      description: 'Designed and implemented comprehensive NORM waste management system for petrochemical complex, achieving zero environmental incidents.',
      imageUrl: '/photo-5.jpg'
    },
    {
      id: 6,
      title: 'Regional Training Program',
      category: 'Training & Education',
      description: 'Delivered specialized NORM management training to 500+ professionals across MENA region, establishing new industry standards.',
      imageUrl: '/photo-6.jpg'
    },
    {
      id: 7,
      title: 'Pipeline NORM Monitoring',
      category: 'System Design',
      description: 'Developed innovative monitoring system for 2,000km pipeline network, enabling real-time NORM detection and rapid response.',
      imageUrl: '/photo-7.jpg'
    },
    {
      id: 8,
      title: 'Industrial Complex Remediation',
      category: 'Remediation Solutions',
      description: 'Large-scale remediation project covering 50 hectares of contaminated land, restoring it to safe environmental standards.',
      imageUrl: '/photo-8.jpg'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            Our Projects
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Success Stories in NORM Management and Environmental Excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-20 h-20 text-emerald-600 mx-auto mb-8" />
            <h2 className="section-title mb-8">Proven Track Record of Excellence</h2>
            <p className="text-xl text-secondary leading-relaxed mb-6">
              With decades of experience across the MENA region, GCC, and Africa, Harvest Energy has successfully completed numerous high-profile projects in NORM management, environmental protection, and radiological safety.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Click on any project below to explore our work in detail. Use arrow keys to navigate between projects when viewing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-padding bg-surface">
        <div className="container">
          <AnimatedGallery items={projects} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Join our growing list of successful projects. Let's work together to ensure your operations meet the highest standards of safety and environmental protection.
          </p>
          <a
            href="/get-in-touch"
            className="btn btn-primary text-lg"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </>
  )
}

export default Projects