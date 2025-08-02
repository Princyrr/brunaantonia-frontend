import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
     // ajuste o caminho conforme seu projeto
import logobranca2 from '../assets/logobranca2.png';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Inicial', path: '/' },
    { name: 'Quem Sou', path: '/quem-sou' },
    { name: 'Contato', path: '/contato' },
    { name: 'Questionário', path: '/questionario' },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'contato@brunaantonia.com.br',
      link: 'mailto:contato@brunaantonia.com.br'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '(81) 98515-8899',
      link: 'tel:+5511999999999'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Recife, PE',
      link: null
    }
  ];

  return (
    <footer className="bg-azulEscuro text-begeClaro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
        <div className="md:col-span-1">
  <Link to="/" className="block mb-4">
    <img
      src={logobranca2}
      alt="Logo Branca"
      className="w-40 h-auto object-contain"
    />
  </Link>
  <p className="text-gray-400 text-sm leading-relaxed">
    Consultoria especializada em posicionamento e branding para microempreendedoras.
  </p>
</div>



          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-begeClaro hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="text-gray-400">
                    {item.icon}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-begeClaro hover:text-white transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-begeClaro text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Conecte-se</h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-begeClaro hover:text-white transition-colors group"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">@BrunaAntonia</span>
              </a>
              <div className="pt-2">
                <Link
                  to="/questionario"
                  className="inline-block bg-begeClaro text-azulEscuro px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Iniciar Diagnóstico
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-begeClaro text-sm">
            © {currentYear} Desenvolvido por Priscila Ramonna. Todos os direitos reservados.
          </p>
         <div className="flex items-center space-x-2 mt-4 md:mt-0 text-sm text-begeClaro">
  <span>Feito com</span>
  <Heart className="w-4 h-4 text-red-500 animate-wiggle" />
  <span>pra você!</span>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;