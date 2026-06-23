# Animación de swipe móvil

## Objetivo

Hacer que la navegación táctil del visor ampliado se perciba como un desplazamiento físico continuo, sin modificar su interfaz ni afectar desktop, botones o teclado.

## Interacción

El visor renderizará una pista con la imagen anterior, la actual y la siguiente. En dispositivos móviles táctiles, la pista seguirá horizontalmente el dedo. Al finalizar el gesto, completará el recorrido hacia la imagen contigua cuando supere el umbral; de lo contrario, regresará al centro.

Se usarán Pointer Events con bloqueo direccional. `touch-action: pan-y` conservará el desplazamiento vertical nativo y reservará el gesto horizontal para la galería. Los valores transitorios del arrastre se mantendrán en referencias y se aplicarán directamente a la pista para evitar renders por cada movimiento.

## Transición y accesibilidad

La pista utilizará transformaciones aceleradas por GPU. La navegación circular existente se conservará. Los botones, el teclado, el foco y los textos no cambiarán. La regla global de `prefers-reduced-motion` reducirá la duración de la transición para quienes lo soliciten.

## Validación

- Seguimiento continuo del dedo en ambas direcciones.
- Avance o retroceso al superar el umbral.
- Retorno al centro para gestos cortos.
- Ausencia de interferencia con gestos verticales.
- Funcionamiento existente de botones y teclado.
- Compilación de producción.
