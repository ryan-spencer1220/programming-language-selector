$(document).ready(function () {
  $("form#programming-language-form").submit(function (event) {
    event.preventDefault();
    const whyCode = $("input:radio[name=why]:checked").val();
    const whatCode = $("input:radio[name=what]:checked").val();
    const difficultCode = $("input:radio[name=difficulty]:checked").val();
    const operatingSystem = $("input:radio[name=os]:checked").val();
    const favoriteAnimal = $("input:radio[name=animal]:checked").val();
    const name = $("input#name").val();

    $(".name").text(name);

    if (whatCode === "websites" && whyCode == "prodev") {
      $("#Python").hide();
      $("#Javascript").fadeIn();
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
      $("#Kotlin").fadeIn();
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
      $("#Swift").fadeIn();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (difficultCode === "easy" && favoriteAnimal === "snake") {
      $("#Python").fadeIn();
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
      $("#C").fadeIn();
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
      $("#C-plus-plus").fadeIn();
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
      $("#C-sharp").fadeIn();
      $("#Go").hide();
      $("#Swift").hide();
      $("#Kotlin").hide();
      $("#PHP").hide();
    } else if (operatingSystem === "linux" && whyCode === "websites") {
      $("#Python").hide();
      $("#Javascript").hide();
      $("#Java").hide();
      $("#C").hide();
      $("#C-plus-plus").hide();
      $("#C-sharp").hide();
      $("#Go").fadeIn();
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
      $("#PHP").fadeIn();
    }
  });
});
