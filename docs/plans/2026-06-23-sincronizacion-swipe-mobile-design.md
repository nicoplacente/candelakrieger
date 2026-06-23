# Sincronización del swipe móvil

## Problema

Al completar un swipe, la pista vuelve al centro antes de que React renderice el nuevo índice. Ese orden permite que la imagen anterior reaparezca durante la actualización.

## Solución

La pista permanecerá en su posición final hasta que `imageIndex` cambie. Un `useLayoutEffect` restablecerá entonces la pista al centro sin transición, después de que React actualice las imágenes pero antes de que el navegador pinte el siguiente fotograma.

Se mantienen sin cambios la interacción, los estilos, el umbral, la duración, los botones y la navegación por teclado.

## Validación

- Avance y retroceso sin regresar a la imagen anterior.
- Retorno al centro para gestos insuficientes.
- Funcionamiento de botones y teclado.
- Compilación de producción.
