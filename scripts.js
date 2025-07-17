document.addEventListener('DOMContentLoaded', function() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu-wrapper');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileNavToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
  }
});