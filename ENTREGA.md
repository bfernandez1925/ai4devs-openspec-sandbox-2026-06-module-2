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

openspec/specs:
```

---

## 2. Plantilla de los 3 Pilares

**Micro-tarea:** Inicializar OpenSpec en el proyecto sandbox y verificar que la estructura generada es correcta.

### Pilar 1 — Herramienta
- **Herramienta usada:** OpenSpec CLI (`@fission-ai/openspec@latest`) + Cursor como copiloto de IA
- **Por qué esta herramienta:** OpenSpec proporciona un framework estructurado para comunicar intenciones al AI de forma reproducible, evitando el "vibe coding" y generando documentación viva del proyecto.

### Pilar 2 — Contexto
- **Contexto proporcionado:** Repositorio sandbox vacío con README que describe el objetivo del ejercicio. Node.js v20+ disponible. Copiloto seleccionado: Cursor.
- **Dónde vive el contexto:** `openspec/config.yaml` (configuración del proyecto) y `openspec/specs/` (specs de dominio permanentes).

### Pilar 3 — Prompt
- **Prompt usado:** `openspec init` — asistente interactivo que guía la inicialización seleccionando el copiloto y generando la estructura base.
- **Resultado obtenido:** Estructura `openspec/` creada con carpetas `changes/`, `changes/archive/` y `specs/`, además de los comandos y skills de Cursor en `.cursor/`.

---

## 3. Observaciones de la exploración

1. **El contexto es el núcleo del framework.** OpenSpec no es solo una herramienta de generación de código; es principalmente un sistema para estructurar y preservar el contexto del proyecto. El archivo `config.yaml` actúa como "memoria persistente" del AI, describiendo stack, convenciones y dominio.

2. **La separación entre `specs/` y `changes/` es intencionada.** Los specs de dominio (reglas de negocio, arquitectura) viven en `specs/` de forma permanente, mientras que los cambios concretos pasan por `changes/` y se archivan al completarse. Esto crea un historial de decisiones consultable.

3. **El workflow `propose → apply → archive` fuerza la intención antes que la ejecución.** Al tener que redactar una propuesta antes de generar código, se evita el problema habitual de pedir al AI que "haga algo" sin definir claramente el alcance, los límites y los criterios de éxito.
