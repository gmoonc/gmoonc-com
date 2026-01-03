export function GettingStarted() {
  const codeExample = `npm i @gmoonc/core

import { defineConfig } from "@gmoonc/core";

export const config = defineConfig({
  appName: "Meu Dashboard",
  menu: [
    { id: "home", label: "Home", path: "/" },
    { id: "admin", label: "Admin", path: "/admin", roles: ["admin"] }
  ]
});`;

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#374161' }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 
          className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-center mb-12"
          style={{ color: '#eaf0f5' }}
        >
          Começar em 2 minutos
        </h2>

        <div 
          className="rounded-lg p-6 border overflow-x-auto shadow-lg"
          style={{ 
            backgroundColor: '#293047',
            borderColor: '#3F4A6E'
          }}
        >
          <pre 
            className="font-['JetBrains_Mono'] text-sm sm:text-base"
            style={{ color: '#eaf0f5' }}
          >
            <code>{codeExample}</code>
          </pre>
        </div>

        <p 
          className="text-center mt-8 font-['Montserrat'] text-lg"
          style={{ color: '#dbe2ea' }}
        >
          Depois, conecte esse config ao seu router (Next ou Vite) e construa as páginas.
        </p>
      </div>
    </section>
  );
}