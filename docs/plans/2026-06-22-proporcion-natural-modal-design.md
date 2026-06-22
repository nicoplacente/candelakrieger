# Proporción natural en imágenes del modal

## Objetivo

Mostrar las miniaturas de proyectos con mayor altura visual, preservando la proporción completa de cada imagen y evitando recortes o deformaciones.

## Implementación

`MediaTile` admitirá un modo de proporción natural para imágenes. En ese modo, `next/image` recibirá las dimensiones reales del medio y se renderizará con ancho completo y altura automática, sin `fill`. La galería de proyectos activará este modo; certificados, portadas, documentos y vista ampliada conservarán su comportamiento actual.

## Verificación

- Confirmar que cada miniatura respete su proporción intrínseca.
- Revisar que las imágenes ocupen todo el ancho de su columna.
- Comprobar scroll exclusivamente vertical y ausencia de desbordamiento horizontal.
- Validar escritorio y móvil.
- Ejecutar la compilación de producción.
