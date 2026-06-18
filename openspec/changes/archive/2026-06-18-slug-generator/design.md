## Context

Necesitamos una función utilitaria pura que transforme cualquier string en un slug válido para URLs. No hay sistema previo que haga esto; es una adición nueva sin dependencias externas.

## Goals / Non-Goals

**Goals:**
- Función pura y sin efectos secundarios
- Soporte de caracteres acentuados (español, francés, etc.)
- Resultado siempre en minúsculas, con guiones como separador
- Sin dependencias de terceros

**Non-Goals:**
- No gestiona unicidad de slugs (eso es responsabilidad de quien persista)
- No trunca slugs a longitud máxima
- No soporta transliteración de alfabetos no latinos (cirílico, chino, etc.)

## Decisions

**Normalización Unicode con `String.prototype.normalize('NFD')`**
- Descompone caracteres acentuados en carácter base + diacrítico (`á` → `a` + combining accent)
- Permite eliminar los diacríticos con una simple regex `/[\u0300-\u036f]/g`
- Alternativa descartada: tabla de reemplazos manual (frágil, incompleta)

**Sin dependencias externas**
- La solución nativa con `normalize` + regex cubre el caso de uso suficientemente
- Alternativa descartada: librerías como `slugify` (añaden peso innecesario para una función trivial)

## Risks / Trade-offs

- [Alfabetos no latinos no quedarán transliterados] → Aceptado como Non-Goal por ahora
- [Strings vacíos o solo con caracteres especiales devuelven string vacío] → Documentado en spec como comportamiento esperado
