import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import bruna1 from '../assets/bruna.png';
import bruna2 from '../assets/bruna1.png';
import bruna3 from '../assets/bruna2.png';
import logo from '../assets/logobranca.png';
import '../index.css';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Posicionamento Estratégico',
      description: 'Defina sua posição única no mercado e destaque-se da concorrência.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Identidade de Marca',
      description: 'Construa uma marca autêntica que ressoa com seu público-alvo.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Crescimento Sustentável',
      description: 'Estratégias para expandir seu negócio de forma consistente.',
    },
  ];

  const images = [bruna1, bruna2, bruna3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-begeClaro to-white  lg:py-40 overflow-hidden">
        {/* Imagens com fade no MOBILE */}
        <div className="block lg:hidden mb-8 relative w-full h-[600px] overflow-hidden  ">

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Bruna ${i + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentImage === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Imagens com fade no DESKTOP */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Bruna ${i + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentImage === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Conteúdo à direita */}
        <div className="relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-12">
            <div className="hidden lg:block w-1/2" />
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Transforme sua
                <span className="block text-gray-600">Microempresa em uma</span>
                <span className="block">Marca de Destaque</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Consultoria especializada em posicionamento e branding para microempreendedoras
                que desejam se destacar no mercado e construir negócios sólidos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <Link
                  to="/quem-sou"
                  className="inline-flex items-center justify-center px-8 py-4 bg-azulEscuro text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  Conheça Meu Trabalho
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/questionario"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-azulEscuro text-black font-semibold rounded-lg hover:bg-marromEscuro hover:text-white transition-colors"
                >
                  Iniciar Diagnóstico
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-begeC ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Como Posso Ajudar Você</h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Ofereço consultoria personalizada para microempreendedoras que querem
              construir marcas autênticas e estratégias de posicionamento eficazes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-begeClaro rounded-2xl flex items-center justify-center mb-6 group-hover:bg-marromEscuro transition-colors">
                  <div className="text-black group-hover:text-white transition-colors">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-begeClaro">
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="Logo flutuante"
            className="w-28 h-28 rounded-full shadow-md border-4 border-white bg-white animate-float"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-azulEscuro">Pronta para Dar o Próximo Passo?</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Vamos trabalhar juntas para posicionar sua marca de forma estratégica e criar uma identidade que realmente conecta com seu público.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-azulEscuro text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors group"
          >
            Vamos Conversar
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
