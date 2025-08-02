import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (apenas console.log por enquanto)
    console.log('Dados do formulário:', formData);
    
    // Simular delay de envio
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'contato@brunaantonia.com.br',
      link: 'mailto:contato@brunaantonia.com.br'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      info: '(81) 98515-8899',
      link: 'tel:+5511999999999'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      info: 'Recife, PE',
      link: null
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Vamos Conversar?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estou aqui para ajudar você a transformar sua microempresa em uma marca de destaque. 
            Entre em contato e vamos discutir como podemos trabalhar juntas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8">
              Envie Sua Mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Seu Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Sua Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-me sobre seu negócio e como posso ajudá-la..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8">
              Informações de Contato
            </h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors group">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black transition-colors">
                    <div className="text-black group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <span className="text-gray-600">{item.info}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-black mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;