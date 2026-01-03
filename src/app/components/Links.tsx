import { Github, Package } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub Repository",
    url: "https://github.com/gmoonc/gmoonc-packages",
    description: "Código fonte e contribuições"
  },
  {
    icon: Package,
    label: "NPM: gmoonc",
    url: "https://www.npmjs.com/package/gmoonc",
    description: "Meta package principal"
  },
  {
    icon: Package,
    label: "NPM: @gmoonc/core",
    url: "https://www.npmjs.com/package/@gmoonc/core",
    description: "Pacote core com configuração"
  }
];

export function Links() {
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
          Links
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg space-y-4 transition-all hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: '#eaf0f5',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#71b399';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <link.icon className="w-10 h-10" style={{ color: '#3F4A6E' }} />
              
              <h3 
                className="font-['Montserrat'] font-bold text-lg"
                style={{ color: '#374161' }}
              >
                {link.label}
              </h3>
              
              <p 
                className="font-['Montserrat']"
                style={{ color: '#293047' }}
              >
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
