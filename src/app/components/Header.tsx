import { Github, Package, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#3F4A6E]" style={{ backgroundColor: '#293047' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e nome */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-['Montserrat'] font-bold text-xl">
                Goalmoon Ctrl
              </span>
              <span 
                className="px-2 py-0.5 rounded-full text-xs font-['Montserrat'] hidden sm:inline"
                style={{ backgroundColor: '#3F4A6E', color: '#dbe2ea' }}
              >
                gmoonc
              </span>
            </div>
          </div>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm font-['Montserrat'] transition-colors hover:text-[#71b399]"
              style={{ color: '#879FED' }}
            >
              Docs
            </a>
            <a 
              href="https://github.com/gmoonc/gmoonc-packages" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-['Montserrat'] transition-colors hover:text-[#71b399]"
              style={{ color: '#879FED' }}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.npmjs.com/package/gmoonc" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-['Montserrat'] transition-colors hover:text-[#71b399]"
              style={{ color: '#879FED' }}
            >
              <Package className="w-4 h-4" />
              <span>NPM</span>
            </a>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#879FED' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#879FED' }} />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#3F4A6E]">
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                className="text-sm font-['Montserrat'] transition-colors hover:text-[#71b399]"
                style={{ color: '#879FED' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <a 
                href="https://github.com/gmoonc/gmoonc-packages" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-['Montserrat'] transition-colors hover:text-[#71b399]"
                style={{ color: '#879FED' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.npmjs.com/package/gmoonc" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-['Montserrat'] transition-colors hover:text-[#71b399]"
                style={{ color: '#879FED' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Package className="w-4 h-4" />
                <span>NPM</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}