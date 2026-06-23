# Corrección del scroll horizontal en mobile

## Problema

Safari en iPhone puede incorporar al ancho desplazable los elementos que GSAP posiciona temporalmente fuera del viewport. Los textos de los proyectos parten con una traslación horizontal y vuelven a `x: 0` al entrar en pantalla, lo que explica que el desborde desaparezca al alcanzar el final de la página.

## Diseño aprobado

- Omitir la animación horizontal de los textos de proyectos en viewports de hasta 900 px y en dispositivos con puntero táctil.
- Conservar las animaciones verticales, de opacidad y parallax.
- Impedir el desborde horizontal del documento con `overflow-x: clip`, manteniendo `hidden` como compatibilidad para navegadores que no soporten `clip`.
- Verificar el comportamiento en anchos mobile representativos y ejecutar el build de producción.
