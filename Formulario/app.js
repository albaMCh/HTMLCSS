$(document).ready(function () {
  $("#example").select2({
    tags: false,
    placeholder: "Escribe para buscar...",
    multiple: true,
  });
  var selectedValues = [[]];
  $("#example").select2("val", selectedValues);
});
