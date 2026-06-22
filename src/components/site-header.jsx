"use client";

import { useRef } from "react";
import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  const mobileMenuRef = useRef(null);

  function closeMobileMenu() {
    mobileMenuRef.current?.removeAttribute("open");
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="wordmark font-medium"
          href="#inicio"
          aria-label="KC Interiorismo, volver al inicio"
        >
          Candela Krieger
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="contact-link" href="#contacto">
          Contacto
        </a>
        <details className="mobile-nav" ref={mobileMenuRef}>
          <summary>Menú</summary>
          <nav aria-label="Navegación móvil">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            ))}
            <a href="#contacto" onClick={closeMobileMenu}>
              Contacto
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
