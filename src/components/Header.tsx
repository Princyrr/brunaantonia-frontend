import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/logobranca2.png';
import logoScrolled from '../assets/logo2.png'; // nova logo ao fazer scroll

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicial', path: '/' },
    { name: 'Quem Sou', path: '/quem-sou' },
    { name: 'Contato', path: '/contato' },
    { name: 'Questionário', path: '/questionario' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      href: 'https://wa.me/5511999999999',
      color: 'hover:text-green-600',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/brandconsultant',
      color: 'hover:text-pink-600',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:contato@brandconsultant.com',
      color: 'hover:text-blue-600',
    },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-begeClaro shadow-md border-b border-gray-700'
          : 'bg-azulEscuro border-b border-begeClaro backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={scrolled ? logoScrolled : logo}
              alt="Logo "
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                  isActiveLink(item.path)
                    ? 'text-gray-900 bg-gray-100'
                    : scrolled
                    ? 'text-black hover:bg-gray-200'
                    : 'text-white hover:text-black hover:bg-begeClaro'
                }`}
              >
                {item.name}
                {isActiveLink(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 pr-4 border-r border-gray-200">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 ${
                    scrolled
                      ? 'text-gray-600 hover:bg-gray-100'
                      : 'text-gray-200 hover:bg-white/10'
                  } ${social.color} transition-colors duration-200 rounded-lg`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <Link
              to="/questionario"
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                scrolled
                  ? 'bg-azulEscuro text-white hover:bg-azulEscuro/90'
                  : 'bg-begeClaro text-azulEscuro hover:bg-gray-300'
              }`}
            >
              Diagnóstico Gratuito
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:text-black hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-begeClaro' : 'text-gray-400'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-marromEscuro' : 'text-gray-400'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`lg:hidden border-t transition-colors duration-300 ${
              scrolled ? 'bg-begeClaro border-gray-300' : 'bg-azulEscuro border-gray-800'
            }`}
          >
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                    isActiveLink(item.path)
                      ? scrolled
                        ? 'text-black bg-gray-100'
                        : 'text-white bg-white/10'
                      : scrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <p
                  className={`px-4 text-sm font-medium mb-3 ${
                    scrolled ? 'text-gray-700' : 'text-gray-200'
                  }`}
                >
                  Conecte-se
                </p>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 ${
                        scrolled
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-gray-200 hover:bg-white/10'
                      } ${social.color} transition-colors duration-200 rounded-lg`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/questionario"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-lg transition-colors duration-300 ${
                    scrolled
                      ? 'bg-azulEscuro text-white hover:bg-azulEscuro/90'
                      : 'bg-begeClaro text-azulEscuro hover:bg-gray-300'
                  }`}
                >
                  Diagnóstico Gratuito
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
