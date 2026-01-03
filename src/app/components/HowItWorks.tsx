import { Menu, Settings, Zap } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Menu,
    title: "Defina o menu",
    description: "Configure os itens, paths e roles necessárias para cada seção do seu dashboard"
  },
  {
    number: "2",
    icon: Settings,
    title: "Estrutura gerada",
    description: "O kit gera automaticamente a estrutura de navegação e rotas base"
  },
  {
    number: "3",
    icon: Zap,
    title: "Implemente páginas",
    description: "Você implementa as páginas do seu dashboard com extrema rapidez"
  }
];

export function HowItWorks() {
  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#374161' }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 
          className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-center mb-16"
          style={{ color: '#eaf0f5' }}
        >
          Como funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-lg space-y-4"
              style={{ backgroundColor: '#eaf0f5' }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['Montserrat'] font-bold text-lg"
                  style={{ backgroundColor: '#3F4A6E', color: '#eaf0f5' }}
                >
                  {step.number}
                </div>
                <step.icon className="w-8 h-8" style={{ color: '#3F4A6E' }} />
              </div>
              
              <h3 
                className="font-['Montserrat'] font-bold text-xl"
                style={{ color: '#374161' }}
              >
                {step.title}
              </h3>
              
              <p 
                className="font-['Montserrat'] leading-relaxed"
                style={{ color: '#293047' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
