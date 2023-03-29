/* Back-to-top Button */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".btn-top").style.display = "block";
  } else {
    document.querySelector(".btn-top").style.display = "none";
  }
}

document.querySelector(".btn-top").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});