import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'VISION', href: '/vision' },
    { name: 'MISSION', href: '/mission' },
    { name: 'GOALS', href: '/goals' },
    { name: 'HARVEST POLICY', href: '/harvest-policy' },
    { name: 'CONSULTATIONS', href: '/consultations' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'TRAINING', href: '/training' },
    { name: 'GET IN TOUCH', href: '/get-in-touch' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-strong shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-primary-700">
              HARVEST ENERGY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  location.pathname === item.href ? 'active text-emerald-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-slate-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-md hover:bg-slate-50 ${
                  location.pathname === item.href
                    ? 'text-emerald-600 font-semibold'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header