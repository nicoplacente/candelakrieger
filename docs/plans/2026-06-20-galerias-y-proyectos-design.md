# Galerías de certificados y proyectos

## Objetivo

Ampliar el portfolio con una galería de certificados y dossiers completos de proyectos, manteniendo el contenido desacoplado en objetos JavaScript para incorporar archivos reales posteriormente.

## Certificados

La sección se ubicará después de Educación y usará una composición masonry inspirada en galerías editoriales. Cada elemento admitirá `src: null`; en ese estado mostrará una cubierta provisional claramente identificada. Al definir una ruta, el componente mostrará la imagen sin requerir cambios adicionales.

Los certificados se abrirán en un diálogo amplio accesible, con cierre mediante botón, tecla Escape y clic en el fondo.

## Proyectos

Cada proyecto mostrará una única imagen de portada. El enlace actual se reemplazará por el botón «Ver proyecto completo», que abrirá un diálogo grande cargado dinámicamente.

El dossier se organizará en dos categorías: renders y planos. Cada categoría tendrá su propio arreglo de medios y un estado provisional cuando no haya archivos reales. La navegación se implementará como pestañas accesibles mediante teclado.

## Movimiento

La sección Proyectos usará GSAP y ScrollTrigger para entradas escalonadas y un parallax de baja amplitud. La integración estará aislada en un Client Component, se limpiará al desmontarse y quedará desactivada cuando el usuario prefiera movimiento reducido.

## Rendimiento y verificación

- Imágenes con `next/image`, dimensiones conocidas y carga diferida.
- Modal de proyectos mediante importación dinámica.
- Contenido estático mantenido en Server Components.
- Verificación con build de producción, navegación por teclado y cierre de diálogos.
