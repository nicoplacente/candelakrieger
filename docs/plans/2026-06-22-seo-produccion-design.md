# SEO para dominio de producción

## Objetivo

Configurar la identidad SEO definitiva de Candela Krieger con una URL canónica fija y archivos estáticos de rastreo.

## Metadata

- Título principal: `Candela Krieger | Diseño de interiores`.
- URL base: `https://candelakrieger.codeluxe.tech` sin variables de entorno.
- Descripción, keywords, canonical, Open Graph y Twitter Cards orientados al portfolio de interiorismo.
- Render destacado real como imagen social.
- Directivas de indexación y vista previa ampliada para Google.

## Datos estructurados

El JSON-LD usará un grafo con la persona Candela Krieger y su servicio profesional KC Interiorismo. Incluirá URL, ubicación, email, teléfono, redes, áreas de conocimiento y servicios, sin inventar dirección física ni datos comerciales.

## Rastreo estático

Se eliminarán `src/app/robots.js` y `src/app/sitemap.js`. `public/robots.txt` permitirá el rastreo general y declarará el sitemap absoluto. `public/sitemap.xml` incluirá la página canónica con prioridad principal y frecuencia mensual.

## Verificación

- Compilación de producción.
- Comprobación de título, canonical, Open Graph, Twitter y JSON-LD en el HTML.
- Acceso correcto a `/robots.txt` y `/sitemap.xml`.
- Ausencia de referencias a variables de entorno o dominios antiguos.
