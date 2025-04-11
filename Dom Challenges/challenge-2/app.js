/* -------------------------- Change The Text Color ------------------------- */
const mainHeading = document.getElementById("mainHeading");
const colorBtns = document.querySelectorAll(".color-buttons");

colorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnId = e.target.id;

    switch (btnId) {
      case "redButton":
        mainHeading.style.color = "red";
        break;
      case "greenButton":
        mainHeading.style.color = "green";
        break;
      case "blueButton":
        mainHeading.style.color = "blue";
        break;
      case "purpleButton":
        mainHeading.style.color = "purple";
        break;
      default:
        mainHeading.style.color = "black";
        break;
    }
  });
});
