import { Menu, Shield, Layers, Plug, Code, Box } from "lucide-react";

const features = [
  {
    icon: Menu,
    title: "Menu como ponto forte",
    description: "Configuração rápida e intuitiva do menu de navegação"
  },
  {
    icon: Shield,
    title: "RBAC desde o início",
    description: "Controle de acesso baseado em roles integrado desde o começo"
  },
  {
    icon: Layers,
    title: "Next e Vite",
    description: "Compatível com os principais frameworks do ecossistema React"
  },
  {
    icon: Plug,
    title: "Agnóstico de backend",
    description: "Sem lock-in: use qualquer backend ou serviço de autenticação"
  },
  {
    icon: Code,
    title: "TypeScript e DX",
    description: "Type-safe e focado em experiência do desenvolvedor"
  },
  {
    icon: Box,
    title: "Modular",
    description: "Pacotes @gmoonc/* organizados e especializados"
  }
];

export function Features() {
  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#293047' }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 
          className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-center mb-16"
          style={{ color: '#eaf0f5' }}
        >
          Diferenciais
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg space-y-4 transition-transform hover:scale-105"
              style={{ backgroundColor: '#dbe2ea' }}
            >
              <feature.icon className="w-10 h-10" style={{ color: '#3F4A6E' }} />
              
              <h3 
                className="font-['Montserrat'] font-bold text-lg"
                style={{ color: '#374161' }}
              >
                {feature.title}
              </h3>
              
              <p 
                className="font-['Montserrat']"
                style={{ color: '#293047' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
