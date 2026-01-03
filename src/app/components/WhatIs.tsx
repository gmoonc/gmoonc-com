import { Menu, ArrowRight, Layout } from "lucide-react";

export function WhatIs() {
  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#293047' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h2 
              className="font-['Montserrat'] font-bold text-3xl sm:text-4xl"
              style={{ color: '#eaf0f5' }}
            >
              O que é
            </h2>
            <p 
              className="font-['Montserrat'] text-lg leading-relaxed"
              style={{ color: '#dbe2ea' }}
            >
              Goalmoon Ctrl é uma base de UI e arquitetura para dashboards. 
              Você define o menu e permissões e cada item vira rota/página 
              para o dev construir rápido.
            </p>
          </div>

          {/* Diagrama */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div 
              className="p-6 rounded-lg text-center space-y-2 w-full sm:flex-1"
              style={{ backgroundColor: '#eaf0f5' }}
            >
              <Menu className="w-8 h-8 mx-auto" style={{ color: '#3F4A6E' }} />
              <p className="font-['Montserrat'] font-bold" style={{ color: '#374161' }}>
                Menu
              </p>
            </div>

            <ArrowRight className="w-6 h-6 flex-shrink-0 rotate-90 sm:rotate-0" style={{ color: '#879FED' }} />

            <div 
              className="p-6 rounded-lg text-center space-y-2 w-full sm:flex-1"
              style={{ backgroundColor: '#dbe2ea' }}
            >
              <Layout className="w-8 h-8 mx-auto" style={{ color: '#3F4A6E' }} />
              <p className="font-['Montserrat'] font-bold" style={{ color: '#374161' }}>
                Rotas
              </p>
            </div>

            <ArrowRight className="w-6 h-6 flex-shrink-0 rotate-90 sm:rotate-0" style={{ color: '#879FED' }} />

            <div 
              className="p-6 rounded-lg text-center space-y-2 w-full sm:flex-1"
              style={{ backgroundColor: '#eaf0f5' }}
            >
              <Layout className="w-8 h-8 mx-auto" style={{ color: '#3F4A6E' }} />
              <p className="font-['Montserrat'] font-bold" style={{ color: '#374161' }}>
                Páginas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}