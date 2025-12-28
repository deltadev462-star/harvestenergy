import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Globe, Users, Award } from 'lucide-react'
import { useEffect } from 'react'
import AnimatedGallery from '../components/AnimatedGallery'
import { motion } from 'framer-motion'

const Home = () => {
  useEffect(() => {
    document.title = 'Harvest Energy - ISO-certified Environmental and Energy Consulting'
  }, [])

  // Project showcase items for the home page
  const featuredProjects = [
    {
      id: 1,
      title: 'Project 1',
      category: 'NORM Management',
      description: '',
      imageUrl: '/photo-1.jpg'
    },
    {
      id: 2,
      title: 'Project 2',
      category: 'Environmental Solutions',
      description: '',
      imageUrl: '/photo-2.jpg'
    },
    {
      id: 3,
      title: 'Project 3',
      category: 'Regulatory Compliance',
      description: '',
      imageUrl: '/photo-3.jpg'
    },
    {
      id: 4,
      title: 'Project 4',
      category: 'Radiological Safety',
      description: '',
      imageUrl: '/photo-4.jpg'
    },
    {
      id: 5,
      title: 'Project 5',
      category: 'Waste Management',
      description: '',
      imageUrl: '/photo-5.jpg'
    },
    {
      id: 6,
      title: 'Project 6',
      category: 'Training Programs',
      description: '',
      imageUrl: '/photo-6.jpg'
    },
    {
      id: 7,
      title: 'Project 7',
      category: 'System Design',
      description: '',
      imageUrl: '/photo-7.jpg'
    },
    {
      id: 8,
      title: 'Project 8',
      category: 'Remediation Solutions',
      description: '',
      imageUrl: '/photo-8.jpg'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
            HARVEST ENERGY
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Premier consultations for the safe and efficient management of Naturally Occurring Radioactive Materials (NORM) and TENORM
          </p>
          <Link
            to="/get-in-touch"
            className="btn btn-primary text-lg inline-flex items-center gap-2 animate-scale-up animation-delay-400"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Leading NORM Consulting Across MENA, GCC & Africa</h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              We provide premier consultations aimed at the safe and efficient management of Naturally Occurring Radioactive Materials (NORM) and Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM).
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Our comprehensive portfolio encompasses detailed NORM surveys and assessments, regulatory compliance audits, system design evaluations, as well as targeted remediation and decontamination solutions.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              We further offer specialized radiological protection consultations and robust waste management support. Recognizing the importance of knowledge transfer, we also deliver professional training programs and educational resources to stakeholders, with particular emphasis on facilitating licensing for environmental discharges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Projects</h2>
          </div>
          
          <AnimatedGallery items={featuredProjects} />
          
        </div>
      </section>

      {/* Key Features - Enhanced with High-Level Animations */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title text-center mb-16"
          >
            Why Choose Harvest Energy
          </motion.h2>
          
          <div className="grid-responsive">
            {/* ISO Certified Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="card hover:shadow-2xl transform-gpu perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="card-body relative"
                whileHover={{ z: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.8 }
                  }}
                  className="inline-block mb-4"
                >
                  <Shield className="w-12 h-12 text-emerald-600" />
                </motion.div>
                
                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <h3 className="text-2xl font-bold mb-3">ISO Certified</h3>
                <p className="text-secondary">
                  First dedicated provider of NORM consulting across the MENA region, GCC, and Africa, established and licensed by the Ministry of Environment and Climate Change.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Regional Expertise Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="card hover:shadow-2xl transform-gpu perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="card-body relative"
                whileHover={{ z: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="inline-block mb-4"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Globe className="w-12 h-12 text-emerald-600" />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-tr from-blue-400 to-emerald-600 rounded-full opacity-20 blur-xl"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <h3 className="text-2xl font-bold mb-3">Regional Expertise</h3>
                <p className="text-secondary">
                  Extensive experience and presence across the Middle East, Gulf Cooperation Council (GCC) region, and Africa with deep understanding of local regulations.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Expert Team Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="card hover:shadow-2xl transform-gpu perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="card-body relative"
                whileHover={{ z: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  className="inline-block mb-4 relative"
                >
                  <Users className="w-12 h-12 text-emerald-600" />
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  >
                    <Users className="w-12 h-12 text-emerald-600" />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-radial from-emerald-500 via-emerald-400 to-transparent rounded-full opacity-10"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
                <p className="text-secondary">
                  Highly qualified professionals in radiation protection and environmental management with decades of technical experience and innovative solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-6">Founder & CEO's Message</h2>
                <p className="text-lg text-secondary mb-4">
                  "At Harvest Energy, our mission is to deliver unmatched expertise in the management of Naturally Occurring Radioactive Materials (NORM) and associated environmental protection initiatives."
                </p>
                <p className="text-secondary mb-4">
                  From the very beginning, we have been dedicated to safeguarding the health and safety of personnel, communities, and the environment, while ensuring operational efficiency and full compliance with all regulatory requirements.
                </p>
                <p className="text-secondary mb-4">
                  Our methodology integrates decades of technical experience, innovative solutions, and a thorough understanding of the regulatory landscape, enabling our clients to address radiological risks both effectively and sustainably.
                </p>
                <p className="text-secondary mb-6">
                  We firmly believe that proactive risk management, continuous education, and transparent stakeholder engagement form the foundation of responsible and successful operations across the energy and industrial sectors.
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-lg">Mesbah TAWFIK</p>
                  <p className="text-secondary">Counselor, International Court UK</p>
                  <p className="text-secondary">Founder & CEO</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-8">
                <Award className="w-24 h-24 text-emerald-600 mx-auto mb-6" />
                <p className="text-center text-lg font-semibold text-emerald-800">
                  "None of Harvest Energy's achievements would have been possible without a leadership team distinguished by deep expertise, unwavering commitment, exceptional talent, and innovative thinking."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Ensure Compliance and Safety?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            As an independent energy consulting firm, Harvest Energy is committed to minimizing the environmental footprint of the oil and gas industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultations"
              className="btn btn-secondary text-lg"
            >
              Explore Our Services
            </Link>
            <Link
              to="/get-in-touch"
              className="btn btn-primary text-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home