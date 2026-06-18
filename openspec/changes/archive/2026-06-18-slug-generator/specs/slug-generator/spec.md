## ADDED Requirements

### Requirement: Convertir título a slug
La función `generateSlug` SHALL transformar cualquier string en un slug válido para URLs: minúsculas, sin acentos, sin caracteres especiales, palabras separadas por guiones simples.

#### Scenario: Título simple sin acentos
- **WHEN** se llama `generateSlug("Hello World")`
- **THEN** retorna `"hello-world"`

#### Scenario: Título con acentos en español
- **WHEN** se llama `generateSlug("Última Oportunidad")`
- **THEN** retorna `"ultima-oportunidad"`

#### Scenario: Título con caracteres especiales
- **WHEN** se llama `generateSlug("¡Hola, Mundo! (2024)")`
- **THEN** retorna `"hola-mundo-2024"`

#### Scenario: Espacios múltiples y guiones consecutivos
- **WHEN** se llama `generateSlug("  doble   espacio  ")`
- **THEN** retorna `"doble-espacio"` (sin guiones al inicio ni al final)

#### Scenario: String vacío
- **WHEN** se llama `generateSlug("")`
- **THEN** retorna `""`

#### Scenario: String solo con caracteres no alfanuméricos
- **WHEN** se llama `generateSlug("!@#$%")`
- **THEN** retorna `""`
