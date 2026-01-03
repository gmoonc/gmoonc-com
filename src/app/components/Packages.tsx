import { Package, Box, Lock } from "lucide-react";

const packages = [
  {
    icon: Package,
    name: "gmoonc",
    description: "Meta package principal do ecossistema",
    available: true
  },
  {
    icon: Box,
    name: "@gmoonc/core",
    description: "Configuração e tipos fundamentais",
    available: true
  },
  {
    icon: Box,
    name: "@gmoonc/ui",
    description: "Componentes de interface",
    available: false
  },
  {
    icon: Box,
    name: "@gmoonc/router",
    description: "Sistema de roteamento integrado",
    available: false
  },
  {
    icon: Lock,
    name: "Adapters",
    description: "Conectores para diferentes backends",
    available: false
  }
];

export function Packages() {
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
          Pacotes
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="p-6 rounded-lg space-y-4 relative"
              style={{ 
                backgroundColor: '#eaf0f5',
                opacity: pkg.available ? 1 : 0.7
              }}
            >
              {!pkg.available && (
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-['Montserrat'] font-bold"
                  style={{ backgroundColor: '#6374AD', color: '#eaf0f5' }}
                >
                  Em breve
                </div>
              )}
              
              <pkg.icon className="w-10 h-10" style={{ color: '#3F4A6E' }} />
              
              <h3 
                className="font-['Montserrat'] font-bold text-lg"
                style={{ color: '#374161' }}
              >
                {pkg.name}
              </h3>
              
              <p 
                className="font-['Montserrat']"
                style={{ color: '#293047' }}
              >
                {pkg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
