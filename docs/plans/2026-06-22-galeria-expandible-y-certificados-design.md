# Galería expandible y certificados en masonry

## Objetivo

Actualizar los certificados al nuevo formato de imagen y mejorar el modal de proyectos con categorías dinámicas, desplazamiento exclusivamente vertical y navegación ampliada por imágenes.

## Certificados

Los siete certificados usarán las imágenes reales de `public/certificados` con sus dimensiones intrínsecas. La sección conservará una composición masonry mediante columnas CSS, respetando la proporción natural de cada archivo y adaptando el número de columnas al ancho disponible.

## Categorías de proyectos

El modal derivará sus pestañas desde las galerías que tengan contenido. Las categorías vacías no se renderizarán y la grilla de pestañas se adaptará a la cantidad disponible.

## Galería ampliada

Cada imagen de la categoría activa podrá abrirse en una vista ampliada dentro del mismo diálogo. La vista incluirá controles anterior, siguiente y cerrar, contador de posición y navegación con las teclas de flecha. La navegación quedará limitada a las imágenes de la categoría activa. Los documentos PDF mantendrán su visor integrado y no participarán del recorrido de imágenes.

## Accesibilidad y scroll

El diálogo mantendrá el foco contenido, cerrará primero la vista ampliada al pulsar Escape y conservará etiquetas accesibles en todos los controles. El eje horizontal quedará oculto y únicamente el panel de contenido tendrá desplazamiento vertical.

## Verificación

- Validar que todas las rutas declaradas existan en `public`.
- Comprobar categorías con dos y tres pestañas.
- Probar ampliación, flechas, teclado y cierre.
- Revisar ausencia de desbordamiento horizontal en escritorio y móvil.
- Ejecutar la compilación de producción.
