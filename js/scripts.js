$(document).ready(function () {
  $("form#programming-language-form").submit(function (event) {
    event.preventDefault();
    const whyCode = $("input:radio[name=why]:checked").val();
    const whatCode = $("input:radio[name=what]:checked").val();
    const difficultCode = $("input:radio[name=difficulty]:checked").val();
    const operatingSystem = $("input:radio[name=os]:checked").val();
    const favoriteAnimal = $("input:radio[name=animal]:checked").val();
    if (whatCode === "websites") {
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
    } else if (
      operatingSystem === "windows" &&
      whatCode === "mobile-applications"
    ) {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").show();
      $("#PHP").hide();
    } else if (
      operatingSystem === "mac-os" &&
      whatCode === "mobile-applications"
    ) {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").show();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (difficultCode === "easy" && favoriteAnimal === "snake") {
      $("#Python").show();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (difficultCode === "hard" && whatCode === "video-games") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").show();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (whyCode === "prodev" && whatCode === "video-games") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").show();
      $("#C-sharp").hide();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (whatCode === "mobile-applications" && difficultCode === "hard") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").show();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (whyCode === "prodev" && difficultCode === "easy") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").show();
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
