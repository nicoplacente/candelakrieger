# Identidad, contacto y formulario funcional

## Objetivo

Actualizar toda la información pública de KC Interiorismo y convertir el formulario de contacto en un canal de envío real, gratuito y accesible.

## Identidad y datos públicos

- Usar “KC Interiorismo” como marca textual en header y footer.
- Reemplazar email, teléfono y ubicación por los datos reales.
- Eliminar referencias visibles y estructuradas a Madrid.
- Actualizar metadata y datos estructurados con la identidad real.
- Usar un año dinámico en el copyright.
- Enlazar Instagram y LinkedIn reales; eliminar Pinterest.

## WhatsApp

El teléfono abrirá WhatsApp en una pestaña nueva mediante el número internacional normalizado `5492926410306` y el mensaje inicial “Hola Candela, quisiera consultarte por un proyecto de interiorismo”.

## Formulario

El formulario enviará mediante `fetch` al endpoint AJAX de FormSubmit asociado a `kriegercandela@gmail.com`. Tendrá validación nativa, honeypot contra spam, botón deshabilitado durante el envío y mensajes accesibles de éxito o error. Al completarse correctamente, limpiará los campos.

FormSubmit enviará un correo de activación al destinatario en el primer envío; la activación se realiza una sola vez.

## Verificación

- Compilación de producción.
- Revisión responsive de header, contacto y footer.
- Comprobación de enlaces externos y WhatsApp.
- Prueba de estados loading, éxito y error del formulario.
- Validación de metadata y datos estructurados.
