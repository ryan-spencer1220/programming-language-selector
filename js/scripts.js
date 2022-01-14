$(document).ready(function () {
  $("form#programming-language-form").submit(function (event) {
    event.preventDefault();
    const whyCode = $("input:radio[name=why]:checked").val();
    const whatCode = $("input:radio[name=what]:checked").val();
    const difficultCode = $("input:radio[name=difficulty]:checked").val();
    const operatingSystem = $("input:radio[name=os]:checked").val();
    const favoriteAnimal = $("input:radio[name=animal]:checked").val();
    if (whyCode === "websites" && difficultCode === "no-preference") {
      $("#Python").hide();
      $("#Javascript").show();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").show();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (favoriteAnimal === "snake") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").show();
    }
  });
});
