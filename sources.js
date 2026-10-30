// Lista de fuentes PERMITIDAS.
// Cada fuente debe tener:
// - name: nombre amigable
// - type: general/news/registry
// - urlTemplate: URL donde se inserta la consulta usando {q}
// - tags: para que el buscador sugiera fuentes por palabras

const SOURCES = [
  {
    name: "Google (opción manual / referencia)",
    type: "general",
    tags: ["google", "buscador", "referencia"],
    urlTemplate: "https://www.google.com/search?q={q}"
  },
  // Ejemplos: reemplaza por portales oficiales o APIs que tengas permiso
  // {
  //   name: "Portal oficial X - búsqueda",
  //   type: "registry",
  //   tags: ["cédula", "registro", "oficial"],
  //   urlTemplate: "https://dominio.gov.co/buscar?texto={q}"
  // },
];
