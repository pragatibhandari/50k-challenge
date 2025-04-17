window.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    if (progress) {
      progress.style.width = '0%'; // Update this value based on your progress
    }
  
    const backToTopBtn = document.getElementById('backToTopBtn');
  
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };
  
    backToTopBtn.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });

  // Mobile Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// === CHANGE NAV COLOR ON SCROLL ===
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
