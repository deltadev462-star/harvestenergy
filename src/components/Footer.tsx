import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react'

const Footer = () => {
  const footerNavigation = {
    main: [
      { name: 'HOME', href: '/' },
      { name: 'ABOUT', href: '/about-us' },
      { name: 'VISION', href: '/vision' },
      { name: 'MISSION', href: '/mission' },
      { name: 'GOALS', href: '/goals' },
      { name: 'GENERAL POLICY', href: '/harvest-policy' },
    ],
    services: [
      { name: 'CONSULTATIONS', href: '/consultations' },
      { name: 'NORM Surveys and Assessments', href: '/consultations#norm-surveys' },
      { name: 'Regulatory Compliance Reviews and Audits', href: '/consultations#compliance' },
      { name: 'System Design Evaluation', href: '/consultations#design' },
      { name: 'Remediation and Decontamination Solutions', href: '/consultations#remediation' },
      { name: 'Radiological Impact Assessment', href: '/consultations#impact' },
      { name: 'Waste Management', href: '/consultations#waste' },
    ],
    resources: [
      { name: 'EXPERTS', href: '#' },
      { name: 'PARTNERS', href: '#' },
      { name: 'PROFILE', href: '#' },
      { name: 'LEGAL POLICY', href: '#' },
      { name: 'HSSE & Q', href: '#' },
      { name: 'ISO CERTIFICATES', href: '#' },
      { name: 'LINKS', href: '#' },
    ],
    externalLinks: [
      { name: 'www.iaea.org', href: 'https://www.iaea.org' },
      { name: 'world-nuclear.org', href: 'https://world-nuclear.org' },
      { name: 'www.nationalacademies.org', href: 'https://www.nationalacademies.org' },
      { name: 'www.sciencedirect.com', href: 'https://www.sciencedirect.com' },
    ],
  }

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold">HARVEST ENERGY</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ISO-certified provider of NORM consulting across the MENA region, GCC, and Africa.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-slate-300">
                  Counselor, International Court UK
                </p>
                <p className="text-sm font-semibold">Mesbah TAWFIK</p>
                <p className="text-sm text-slate-300">Founder & CEO</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {footerNavigation.services.slice(0, 7).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">External Links</h4>
              <ul className="space-y-2 mb-6">
                {footerNavigation.externalLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {item.name}
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/get-in-touch"
                className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors text-sm font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-slate-400">
                Copyright © {new Date().getFullYear()} HARVEST ENERGY. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerNavigation.resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors uppercase"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-emerald-600">
        <div className="container py-8">
          <div className="text-center">
            <p className="text-lg mb-4">
              Harvest Energy is ready to support your operations with expert consultations.
            </p>
            <p className="text-sm mb-6 max-w-3xl mx-auto">
              Whether you need guidance on radiological management, environmental protection, or waste management, 
              our team delivers tailored solutions to help you operate safely, efficiently, and in full compliance with regulations.
            </p>
            <Link
              to="/get-in-touch"
              className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 rounded-md hover:bg-slate-100 transition-colors font-semibold"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer