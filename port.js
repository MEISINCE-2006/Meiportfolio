const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');
const navItems = document.querySelectorAll('.navbar ul li a');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});