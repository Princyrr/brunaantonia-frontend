import React, { useState } from 'react';
import { User, Mail, Building, Instagram, Tag, FileText } from 'lucide-react';

interface ClientData {
  name: string;
  email: string;
  company: string;
  instagram: string;
  niche: string;
}

interface QuestionnaireAnswers {
  [key: string]: string;
}

const Questionnaire: React.FC = () => {
  const [step, setStep] = useState(1);
  const [clientData, setClientData] = useState<ClientData>({
    name: '',
    email: '',
    company: '',
    instagram: '',
    niche: ''
  });

  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});

  const questions = [
    {
      id: 'question1',
      text: 'Qual é a história por trás da criação do seu negócio? O que te motivou a empreender?'
    },
    {
      id: 'question2',
      text: 'Quem é seu cliente ideal? Descreva seu público-alvo em detalhes (idade, interesses, dores, sonhos).'
    },
    {
      id: 'question3',
      text: 'Qual problema específico seu produto/serviço resolve na vida dos seus clientes?'
    },
    {
      id: 'question4',
      text: 'O que te diferencia dos seus concorrentes? Qual é seu diferencial único?'
    },
    {
      id: 'question5',
      text: 'Como você gostaria que sua marca fosse percebida pelo público? Quais sentimentos deve despertar?'
    },
    {
      id: 'question6',
      text: 'Qual é a missão e visão do seu negócio? Onde você se vê em 5 anos?'
    },
    {
      id: 'question7',
      text: 'Quais são os valores fundamentais que guiam suas decisões empresariais?'
    },
    {
      id: 'question8',
      text: 'Como você se comunica atualmente com seus clientes? Quais canais utiliza?'
    },
    {
      id: 'question9',
      text: 'Quais são suas principais dificuldades em relação ao posicionamento da sua marca?'
    },
    {
      id: 'question10',
      text: 'Que tipo de resultado espera alcançar com a consultoria de branding e posicionamento?'
    }
  ];

  const handleClientDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmitClientData = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do cliente:', clientData);
    setStep(2);
  };

  const handleSubmitQuestionnaire = (e: React.FormEvent) => {
    e.preventDefault();
    const completeData = {
      clientData,
      answers
    };
    console.log('Questionário completo:', completeData);
    alert('Questionário enviado com sucesso! Entraremos em contato em breve com uma proposta personalizada.');
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Diagnóstico de Posicionamento
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Este questionário me ajudará a entender melhor seu negócio e desenvolver 
            uma estratégia de branding personalizada para você.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              step >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`w-20 h-1 ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              step >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                Primeiro, vamos nos conhecer melhor
              </h2>
              <p className="text-gray-600">
                Preencha suas informações básicas para personalizarmos nossa análise.
              </p>
            </div>

            <form onSubmit={handleSubmitClientData} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-black mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={clientData.name}
                    onChange={handleClientDataChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-black mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Seu Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={clientData.email}
                    onChange={handleClientDataChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-black mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={clientData.company}
                    onChange={handleClientDataChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-black mb-2">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    value={clientData.instagram}
                    onChange={handleClientDataChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="@seuinstagram"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-black mb-2">
                  <Tag className="w-4 h-4 mr-2" />
                  Nicho de Atuação *
                </label>
                <input
                  type="text"
                  name="niche"
                  value={clientData.niche}
                  onChange={handleClientDataChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Ex: Moda feminina, Consultoria financeira, Produtos artesanais..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Continuar para o Questionário
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                Agora vamos mergulhar fundo no seu negócio
              </h2>
              <p className="text-gray-600">
                Responda às perguntas a seguir com o máximo de detalhes possível. 
                Quanto mais informações você compartilhar, melhor será nossa análise.
              </p>
            </div>

            <form onSubmit={handleSubmitQuestionnaire} className="space-y-8">
              {questions.map((question, index) => (
                <div key={question.id} className="space-y-3">
                  <label className="flex items-start text-sm font-medium text-black">
                    <div className="flex items-center mr-3 mt-1">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="text-gray-500">#{index + 1}</span>
                    </div>
                    {question.text}
                  </label>
                  <textarea
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                    placeholder="Digite sua resposta aqui..."
                  />
                </div>
              ))}

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-lg hover:border-black hover:text-black transition-colors"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Enviar Questionário
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;