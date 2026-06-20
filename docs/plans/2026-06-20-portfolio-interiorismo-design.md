# Portfolio de interiorismo

## Objetivo

Construir un portfolio profesional de una sola página a partir del HTML de referencia, conservando sus textos y dirección visual, con una implementación mantenible en Next.js 16.

## Arquitectura

- App Router y Server Components para todo el contenido estático.
- Componentes organizados por dominio en `src/components`.
- Datos repetidos centralizados en módulos de contenido.
- Client Components limitados al menú móvil y las pestañas accesibles de proyectos.
- Imágenes locales optimizadas mediante `next/image`.

## Experiencia visual

Dirección editorial sobria inspirada en planos, muestras de materiales y dossiers de interiorismo. Paleta de papel cálido, grafito, piedra y verde oliva. La firma visual será el lenguaje de expediente de proyecto: numeración, etiquetas técnicas, líneas finas y paneles que alternan fotografía, plano y render.

La interfaz será responsive, mobile-first, con transiciones discretas, estados de interacción claros y compatibilidad con `prefers-reduced-motion`.

## Accesibilidad y rendimiento

- HTML semántico, jerarquía correcta de encabezados y enlace para saltar al contenido.
- Navegación por teclado, foco visible y pestañas con roles y relaciones ARIA.
- Contraste legible, textos alternativos descriptivos y formularios correctamente etiquetados.
- Server Components por defecto, fuentes optimizadas, imágenes dimensionadas y carga diferida salvo contenido crítico.

## SEO

- Metadata descriptiva, canonical, Open Graph y Twitter Card.
- Datos estructurados `Person` y `ProfessionalService`.
- `robots.js`, `sitemap.js` e imagen social.
- Contenido indexable renderizado en servidor.

## Verificación

- Compilación de producción sin errores.
- Revisión responsive y funcional en navegador.
- Comprobación de navegación por teclado, reducción de movimiento y ausencia de desbordamientos.
