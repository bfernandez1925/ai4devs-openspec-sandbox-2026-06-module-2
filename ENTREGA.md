# ENTREGA — Ejercicio OpenSpec Sandbox

## 1. Evidencia de OpenSpec operativo

### `openspec --version`
```
1.4.1
```

### `ls -R openspec/`
```
openspec/changes
openspec/config.yaml
openspec/specs

openspec/changes:
archive

openspec/changes/archive:
2026-06-18-slug-generator

openspec/changes/archive/2026-06-18-slug-generator:
design.md  proposal.md  specs/  tasks.md

openspec/changes/archive/2026-06-18-slug-generator/specs/slug-generator:
spec.md

openspec/specs:
slug-generator

openspec/specs/slug-generator:
spec.md
```

---

## 2. Plantilla de los 3 Pilares

**Micro-tarea:** Generador de slugs — función utilitaria que convierte un título o string en un slug válido para URLs (minúsculas, sin acentos, sin caracteres especiales, palabras separadas por guiones).

### Pilar 1 — Herramienta
- **Herramienta usada:** OpenSpec CLI v1.4.1 + Cursor como copiloto de IA
- **Por qué esta herramienta:** OpenSpec estructura el proceso de desarrollo en artefactos formales (proposal, design, specs, tasks) que sirven de contrato entre el desarrollador y el AI, eliminando ambigüedad y generando documentación viva del proyecto.

### Pilar 2 — Contexto
- **Contexto proporcionado al AI:**
  - `proposal.md`: motivación (necesidad de slugs seguros para URLs), qué cambia y qué no
  - `design.md`: decisión de usar `normalize('NFD')` en lugar de dependencias externas, con alternativas descartadas y trade-offs
  - `specs/slug-generator/spec.md`: 6 escenarios concretos con WHEN/THEN (acentos, caracteres especiales, strings vacíos, espacios múltiples)
  - `tasks.md`: lista de tareas accionables con checkboxes
- **Dónde vive el contexto:** `openspec/specs/slug-generator/spec.md` (spec permanente tras el archive), historial en `openspec/changes/archive/2026-06-18-slug-generator/`

### Pilar 3 — Prompt
- **Prompts usados en el workflow:**
  - `openspec new change "slug-generator"` → scaffolding del cambio
  - `openspec instructions <artifact> --change "slug-generator" --json` → instrucciones precisas por artefacto
  - `openspec archive slug-generator -y` → cierre del ciclo, actualización del spec permanente
- **Resultado obtenido:**
  - `src/utils/slugGenerator.ts` — implementación pura sin dependencias externas
  - `src/utils/slugGenerator.test.ts` — 6 tests que cubren todos los escenarios del spec
  - Spec archivado y promovido a `openspec/specs/` como conocimiento permanente del proyecto

---

## 3. Observaciones de la exploración

1. **El contexto es el núcleo del framework.** OpenSpec no es solo una herramienta de generación de código; es principalmente un sistema para estructurar y preservar el contexto del proyecto. Los artefactos (`proposal.md`, `design.md`, `specs/`) actúan como "memoria persistente" que cualquier AI puede leer para entender el proyecto sin necesidad de explicaciones repetidas.

2. **La separación entre `specs/` y `changes/` es intencionada.** Los specs de dominio (reglas de negocio, comportamientos esperados) viven en `specs/` de forma permanente tras el `archive`, mientras que los cambios concretos pasan por `changes/` y se archivan al completarse. Esto crea un historial de decisiones consultable y un contrato vivo del sistema.

3. **El workflow `propose → apply → archive` fuerza la intención antes que la ejecución.** Al tener que redactar una propuesta, un diseño y unos specs antes de generar código, se evita el problema habitual del "vibe coding": pedir al AI que "haga algo" sin definir claramente el alcance, los límites y los criterios de éxito. Cada escenario del spec es directamente un test case.
