let slideIndex = [1, 1, 1];
let slideId = ["slider1", "slider2", "slider3"];

window.onload = function() {
    for (let i = 0; i < slideId.length; i++) {
        showSlides(1, i);
    }
};

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.querySelectorAll(`#${slideId[no]} .mySlides`);
    
    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    x[slideIndex[no] - 1].style.display = "block";
}
