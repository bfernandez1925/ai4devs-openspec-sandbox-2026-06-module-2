## Why

Los títulos y nombres de recursos necesitan una representación segura para URLs: sin espacios, sin acentos, en minúsculas y con guiones. Hacerlo a mano cada vez es propenso a errores e inconsistente.

## What Changes

- Añadir una función utilitaria `generateSlug(title: string): string`
- La función transforma cualquier string en un slug válido para URLs
- No hay breaking changes (es una adición nueva)

## Capabilities

### New Capabilities

- `slug-generator`: Función que convierte un título o string arbitrario en un slug de URL limpio (minúsculas, sin acentos, sin caracteres especiales, palabras separadas por guiones)

### Modified Capabilities

## Impact

- Nuevo fichero `src/utils/slugGenerator.ts`
- Sin dependencias externas
- Sin cambios en código existente
