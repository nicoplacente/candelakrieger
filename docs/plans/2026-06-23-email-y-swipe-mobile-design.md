# Plantilla de correo y swipe móvil

## Objetivo

Mejorar la lectura de los mensajes enviados desde el formulario y permitir navegar las imágenes ampliadas con un gesto táctil en dispositivos móviles, sin modificar la interfaz existente.

## Correo

Se mantiene FormSubmit y se cambia la plantilla `table` por `box`. Cada dato del formulario aparecerá en un bloque identificado por el nombre del campo, evitando los encabezados genéricos “Name” y “Value”. Los textos externos en inglés pertenecen a FormSubmit y no se pueden personalizar desde la integración actual.

## Visor de imágenes

El gesto se incorpora únicamente al visor ampliado. Un desplazamiento horizontal intencional hacia la izquierda mostrará la imagen siguiente y uno hacia la derecha mostrará la anterior. El gesto solo se procesará en pantallas móviles con puntero táctil, cuando haya más de una imagen y cuando la distancia horizontal supere un umbral y sea mayor que la vertical.

Los botones, la navegación por teclado, el foco, la estructura y los estilos actuales se conservan sin cambios visuales.

## Validación

- Compilación de producción.
- Envío del formulario con `_template` configurado como `box`.
- Navegación del visor mediante botones y teclado.
- Swipe móvil en ambas direcciones.
- Ausencia de cambios de imagen ante gestos verticales o demasiado cortos.
