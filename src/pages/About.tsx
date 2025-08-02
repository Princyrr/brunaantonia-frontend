import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      number: '100+',
      label: 'Microempreendedoras Atendidas'
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: '5 Anos',
      label: 'de Experiência'
    },
    {
      icon: <Target className="w-6 h-6" />,
      number: '95%',
      label: 'Taxa de Satisfação'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Olá, eu sou a 
                <span className="block text-gray-600">Bruna Antônia</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Consultora especializada em posicionamento e branding para microempreendedoras. 
                Minha missão é ajudar mulheres empreendedoras a construírem marcas autênticas 
                e estratégias de posicionamento que realmente funcionam.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors group"
              >
                Vamos Trabalhar Juntas
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500 text-lg">Foto Profissional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-black transition-colors">
                  <div className="text-black group-hover:text-white transition-colors">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-black mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Minha Trajetória
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <div className="space-y-6">
              <p>
                Minha jornada no mundo do branding começou há mais de 5 anos, quando percebi 
                que muitas microempreendedoras talentosas tinham dificuldades para se posicionar 
                de forma estratégica no mercado.
              </p>
              
              <p>
                Formada em Marketing Digital e com especialização em Branding, dediquei minha 
                carreira a entender as necessidades específicas das microempresas e desenvolver 
                metodologias que realmente funcionam para esse público.
              </p>
              
              <p>
                Ao longo dos anos, tive o privilégio de trabalhar com mais de 100 microempreendedoras, 
                ajudando-as a descobrir sua essência de marca, definir seu posicionamento único e 
                criar estratégias de comunicação autênticas.
              </p>
              
              <p>
                Acredito que toda empreendedora tem uma história única para contar e uma contribuição 
                valiosa para oferecer ao mundo. Meu papel é ajudá-las a descobrir e comunicar essa 
                unicidade de forma clara e impactante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Meu Propósito
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Empoderar microempreendedoras através de estratégias de branding autênticas 
            e posicionamento estratégico, ajudando-as a construir negócios sólidos e 
            marcas que realmente conectam com seu público-alvo.
          </p>
          <Link
            to="/questionario"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors group"
          >
            Iniciar Meu Diagnóstico
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;