let slideIndex = [1, 1, 1];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

// function plusSlides(n, slideshowIndex) {
//   showSlides((slideIndex[slideshowIndex] += n), slideshowIndex);
// }

// function currentSlide(n, slideshowIndex) {
//   showSlides((slideIndex[slideshowIndex] = n), slideshowIndex);
// }

function showSlides(n, slideshowIndex) {
  let i;
  let slides = document
    .getElementById("slider" + (slideshowIndex + 1))
    .getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex[slideshowIndex] = 1;
  }
  if (n < 1) {
    slideIndex[slideshowIndex] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    // dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[slideshowIndex] - 1].style.display = "block";
  // dots[slideIndex[slideshowIndex] - 1].className += " active";
}
