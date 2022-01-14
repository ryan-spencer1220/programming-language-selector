$(document).ready(function () {
  $("form#programming-language-form").submit(function (event) {
    event.preventDefault();
    const whyCode = "select#question1".val();
    const whatCode = "checked#question2".val();
    const easyCode = "checked#question3".val();
    const whichOS = "checked#question4".val();
    const favoriteAnimal = "checked#question5".val();
    if (whyCode === "fun") {
      $("#Javascript").show();
      $("#Python").hidden();
      $("#C").hidden();
    } else {
      $("#Javascript").hidden();
      $("#Python").show();
      $("#C").hidden();
    }
  });
});
