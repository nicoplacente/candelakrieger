# Sincronización del swipe móvil

## Problema

Al completar un swipe, React vuelve a crear las tres diapositivas porque sus claves combinan la posición y el identificador de la imagen. Aunque la pista se sincroniza antes del siguiente fotograma, el reemplazo de los nodos de imagen puede dejar visible el fondo durante la decodificación y producir un parpadeo.

## Solución

La pista permanecerá en su posición final hasta que `imageIndex` cambie. Un `useLayoutEffect` restablecerá entonces la pista al centro sin transición, después de que React actualice las imágenes pero antes de que el navegador pinte el siguiente fotograma.

Cada imagen utilizará su identificador estable como clave cuando las tres posiciones correspondan a imágenes distintas. Así, React moverá el nodo ya cargado desde la posición lateral al centro en lugar de desmontarlo. Las imágenes visible, anterior y siguiente se cargarán anticipadamente y se decodificarán de forma sincrónica. Para galerías de una o dos imágenes se conservarán claves por posición, evitando claves duplicadas, con la carga anticipada como respaldo.

Se mantienen sin cambios la interacción, los estilos, el umbral, la duración, los botones y la navegación por teclado.

## Validación

- Avance y retroceso sin regresar a la imagen anterior.
- Retorno al centro para gestos insuficientes.
- Funcionamiento de botones y teclado.
- Compilación de producción.
