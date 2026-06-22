# Distribución visual de habilidades

## Objetivo

Igualar el espacio visual entre los bloques de Habilidades técnicas, Software e Idiomas considerando el ancho real de su contenido.

## Implementación

La grilla usará tres columnas `max-content` distribuidas con `space-between`. De este modo, el espacio libre se reparte uniformemente entre los bloques en lugar de asignar el mismo ancho a contenidos de longitudes diferentes. En anchos reducidos, los bloques se apilarán para evitar compresión y desbordamiento.

## Verificación

- Comprobar separación visual uniforme en escritorio.
- Validar ausencia de desbordamiento en tablet.
- Confirmar disposición de una columna en móvil.
- Ejecutar la compilación de producción.
