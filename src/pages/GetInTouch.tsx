import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    document.title = 'Get In Touch - Harvest Energy | Contact Us'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Harvest Energy for expert NORM consultations, environmental protection services, and radiological safety solutions.')
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            Get In Touch
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Ready to Ensure Compliance and Environmental Excellence?
          </p>
        </div>
      </section>

      {/* Contact Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-secondary leading-relaxed mb-6">
              Harvest Energy is ready to support your operations with expert consultations. Whether you need guidance on radiological management, environmental protection, or waste management, our team delivers tailored solutions to help you operate safely, efficiently, and in full compliance with regulations.
            </p>
            <p className="text-lg text-secondary">
              Contact us today to discuss how we can help you achieve your environmental and operational goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Regional Presence</h3>
                      <p className="text-secondary">MENA Region, GCC, and Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-secondary">info@harvestenergy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-secondary">Available upon request</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                  <h3 className="font-bold mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.iaea.org" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800">www.iaea.org</a></li>
                    <li><a href="https://world-nuclear.org" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800">world-nuclear.org</a></li>
                    <li><a href="https://www.nationalacademies.org" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800">www.nationalacademies.org</a></li>
                    <li><a href="https://www.sciencedirect.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800">www.sciencedirect.com</a></li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button and Status */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </button>

                      {submitStatus === 'success' && (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle size={20} />
                          <span>Message sent successfully!</span>
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 text-red-600">
                          <AlertCircle size={20} />
                          <span>Error sending message. Please try again.</span>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Contact */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-extrabold mb-6">Leadership Contact</h2>
              <div className="space-y-2">
                <p className="text-xl font-bold">Mesbah TAWFIK</p>
                <p className="text-lg text-emerald-800">Counselor, International Court UK</p>
                <p className="text-lg text-emerald-800">Founder & CEO</p>
              </div>
              <p className="mt-6 text-emerald-700">
                For executive inquiries and strategic partnerships
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInTouch