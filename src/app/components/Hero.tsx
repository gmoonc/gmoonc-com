import { Github, Package, ArrowRight } from "lucide-react";

const badges = [
  { label: "Next", color: "#6374AD" },
  { label: "Vite", color: "#6374AD" },
  { label: "RBAC", color: "#3F4A6E" },
  { label: "Plugável", color: "#3F4A6E" },
  { label: "TypeScript", color: "#6374AD" }
];

export function Hero() {
  return (
    <section 
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in"
      style={{ backgroundColor: '#374161' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Título */}
          <div className="space-y-4">
            <h1 
              className="font-['Montserrat'] font-bold text-4xl sm:text-5xl lg:text-6xl"
              style={{ color: '#eaf0f5' }}
            >
              Goalmoon Ctrl
            </h1>
            <p 
              className="font-['Montserrat'] text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#dbe2ea' }}
            >
              Kit plugável para construir dashboards com autenticação e RBAC.
              <br />
              Funciona com Next e Vite. Agnóstico de backend.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/gmoonc/gmoonc-packages"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-['Montserrat'] font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto justify-center"
              style={{ backgroundColor: '#71b399', color: '#293047' }}
            >
              <Github className="w-5 h-5" />
              Ver no GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/gmoonc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-['Montserrat'] font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto justify-center"
              style={{ 
                backgroundColor: 'transparent', 
                color: '#879FED',
                border: '2px solid #879FED'
              }}
            >
              <Package className="w-5 h-5" />
              Instalar via NPM
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="px-4 py-2 rounded-full font-['Montserrat'] text-sm"
                style={{ 
                  backgroundColor: badge.color,
                  color: '#eaf0f5'
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}