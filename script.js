// How to trigger a CSS animation on a button click.
// Credit to dimlucas:
// https://www.dimlucas.com/index.php/2016/11/17/how-to-trigger-a-css-animation-on-button-click/
const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", () => {
  refreshButton.classList.add("spin-animation");
  setTimeout(() => {
    refreshButton.classList.remove("spin-animation");
  }, 500);
});
