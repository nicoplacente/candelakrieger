# Contenido real del portfolio

## Objetivo

Reemplazar los proyectos y certificados ficticios por todo el contenido disponible en `public`, sin duplicar archivos ni alterar la dirección visual existente.

## Proyectos

El portfolio mostrará seis proyectos, respetando el orden de sus carpetas: `tp1`, `tp2`, `tp3`, `tp5`, `roma` y `proyecto-final`. Cada proyecto utilizará un render real como portada y expondrá todos sus renders y planos de AutoCAD disponibles. Las categorías sin archivos se mostrarán vacías, sin contenido provisional.

## Certificados

La sección mostrará los siete certificados reales. Los archivos PDF se visualizarán como documentos integrados en el diálogo y el certificado JPEG conservará el tratamiento optimizado de imagen.

## Implementación

Las rutas y metadatos permanecerán centralizados en `src/data/portfolio.js`. Los componentes de medios distinguirán imágenes y documentos mediante un campo explícito, manteniendo accesibilidad, navegación por teclado y diseño responsive.

## Verificación

- Comprobar que todas las rutas declaradas existen en `public`.
- Ejecutar la compilación de producción.
- Verificar proyectos, categorías, certificados PDF y certificado de imagen en el navegador.
