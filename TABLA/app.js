$(document).ready(function () {
  $("#alumnos").DataTable({
    lengthChange: false,
    paging: false,
    info: false,
    language: {
      search: "Alumnos",
      searchPlaceholder: "Buscar por Nombre, Email o Palabra clave...",
    },
  });
});
