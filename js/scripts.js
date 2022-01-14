$(document).ready(function () {
  $("form#programming-language-form").submit(function (event) {
    event.preventDefault();
    const whyCode = $("input:radio[name=why]:checked").val();
    const whatCode = $("input:radio[name=what]:checked").val();
    const difficultCode = $("input:radio[name=difficulty]:checked").val();
    const operatingSystem = $("input:radio[name=os]:checked").val();
    const favoriteAnimal = $("input:radio[name=animal]:checked").val();
    if (whatCode === "websites") {
      $("#Javascript").show();
      $("#Python").hidden();
      $("#C").hidden();
    } else if (difficultCode === "easy" && whyCode === "fun") {
      $("#Javascript").hidden();
      $("#Python").show();
      $("#C").hidden();
    } else {
      $("#Javascript").hidden();
      $("#Python").show();
      $("#C").hidden();
    }
  });
});
