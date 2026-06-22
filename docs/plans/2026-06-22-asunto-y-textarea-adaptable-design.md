# Asunto y textarea adaptable

## Objetivo

Completar el formulario de contacto con un asunto obligatorio y permitir que el campo Mensaje crezca según su contenido.

## Implementación

El campo Asunto se ubicará entre Email y Mensaje, será obligatorio y tendrá un máximo de 120 caracteres. Su valor se enviará como dato de la consulta y también generará el asunto del correo con el prefijo `KC Interiorismo —`.

El textarea conservará una altura mínima y usará dimensionamiento por contenido para crecer verticalmente a medida que el usuario escribe, sin habilitar redimensionamiento horizontal.

## Verificación

- Validación obligatoria de los cuatro campos.
- Cuerpo JSON con `asunto` y `_subject` correctamente derivados.
- Crecimiento vertical del textarea.
- Compilación de producción.
