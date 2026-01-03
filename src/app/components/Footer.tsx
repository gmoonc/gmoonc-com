export function Footer() {
  return (
    <footer 
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#192639' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo e Copyright */}
          <div className="text-center md:text-left">
            <p 
              className="font-['Montserrat'] font-bold text-lg mb-2"
              style={{ color: '#eaf0f5' }}
            >
              Goalmoon
            </p>
            <p 
              className="font-['Montserrat'] text-sm"
              style={{ color: '#dbe2ea' }}
            >
              © {new Date().getFullYear()} Goalmoon. Todos os direitos reservados.
            </p>
          </div>

          {/* Informações */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center">
            <div>
              <p 
                className="font-['Montserrat'] text-sm"
                style={{ color: '#dbe2ea' }}
              >
                Licença: <span className="font-bold">MIT</span>
              </p>
            </div>
            <div>
              <p 
                className="font-['Montserrat'] text-sm"
                style={{ color: '#dbe2ea' }}
              >
                Goalmoon Ctrl é agnóstico de backend
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="mt-8 pt-8 border-t text-center"
          style={{ borderColor: '#293047' }}
        >
          <p 
            className="font-['Montserrat'] text-sm"
            style={{ color: '#879FED' }}
          >
            Construa dashboards rapidamente com{" "}
            <span className="font-bold" style={{ color: '#71b399' }}>
              gmoonc
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
