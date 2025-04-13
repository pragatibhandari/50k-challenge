window.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    if (progress) {
      progress.style.width = '30%'; // Update this value based on your progress
    }
  });
  window.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    if (progress) {
      progress.style.width = '30%'; // Update this value based on your progress
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
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    if (progress) {
      progress.style.width = '30%'; // Update this value based on your progress
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