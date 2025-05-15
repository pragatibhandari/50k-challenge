window.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    if (progress) {
      progress.style.width = '0.1%'; // Update this value based on your progress
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

document.addEventListener('DOMContentLoaded', () => {
  const totalRevenue = 0; // Example: Change this dynamically later
  const totalProfit = 0;   // Example: Update this too

  const revenueProgress = document.getElementById('revenue-progress');
  const profitProgress = document.getElementById('profit-progress');

  const revenueAmount = document.getElementById('revenue-amount');
  const profitAmount = document.getElementById('profit-amount');

  // Update values
  revenueProgress.style.width = (totalRevenue / 50000 * 100) + '%';
  profitProgress.style.width = (totalProfit / 50000 * 100) + '%';

  revenueAmount.textContent = `€${totalRevenue} / €50,000`;
  profitAmount.textContent = `€${totalProfit}`;

  // Activate Milestones
  if (totalRevenue >= 5000) {
    document.getElementById('milestone-5k').style.backgroundColor = '#c3f7c0';
  }
  if (totalRevenue >= 10000) {
    document.getElementById('milestone-10k').style.backgroundColor = '#c3f7c0';
  }
  if (totalRevenue >= 25000) {
    document.getElementById('milestone-25k').style.backgroundColor = '#c3f7c0';
  }
  if (totalRevenue >= 50000) {
    document.getElementById('milestone-50k').style.backgroundColor = '#c3f7c0';
  }
});

function toggleWeek(header) {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

