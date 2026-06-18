import { generateSlug } from "./slugGenerator";

describe("generateSlug", () => {
  it("convierte título simple sin acentos", () => {
    expect(generateSlug("Hello World")).toBe("hello-world");
  });

  it("elimina acentos en español", () => {
    expect(generateSlug("Última Oportunidad")).toBe("ultima-oportunidad");
  });

  it("elimina caracteres especiales", () => {
    expect(generateSlug("¡Hola, Mundo! (2024)")).toBe("hola-mundo-2024");
  });

  it("colapsa espacios múltiples y elimina guiones al inicio/final", () => {
    expect(generateSlug("  doble   espacio  ")).toBe("doble-espacio");
  });

  it("devuelve string vacío para input vacío", () => {
    expect(generateSlug("")).toBe("");
  });

  it("devuelve string vacío si solo hay caracteres especiales", () => {
    expect(generateSlug("!@#$%")).toBe("");
  });
});
