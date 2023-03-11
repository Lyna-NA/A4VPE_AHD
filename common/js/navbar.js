const navbarLinks = document.querySelector('.navbar-links');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});