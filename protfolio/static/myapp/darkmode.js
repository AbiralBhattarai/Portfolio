// Dark mode toggle for Bootstrap classes
window.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('.darkModeToggle');
  const icons = document.querySelectorAll('.darkModeIcon');

  function setDarkMode(on) {
    const navbar = document.querySelector('.navbar');
    const main = document.getElementById('mainContent');
    const cards = document.querySelectorAll('.card');
    const footer = document.querySelector('footer, .footer');
    const sections = document.querySelectorAll('.section, .bg-light');
    
    // Body and HTML
    document.body.classList.toggle('bg-dark', on);
    document.body.classList.toggle('text-light', on);
    document.documentElement.classList.toggle('bg-dark', on);
    
    // Navbar
    if (navbar) {
      navbar.classList.toggle('navbar-dark', on);
      navbar.classList.toggle('navbar-light', !on);
      navbar.classList.toggle('bg-dark', on);
      navbar.classList.toggle('bg-body-tertiary', !on);
    }
    
    // Main
    if (main) {
      main.classList.toggle('bg-dark', on);
      main.classList.toggle('text-light', on);
    }
    
    // Cards
    cards.forEach(card => {
      card.classList.toggle('bg-dark', on);
      card.classList.toggle('text-light', on);
      card.classList.toggle('border-secondary', on);
    });
    
    // Footer
    if (footer) {
      footer.classList.toggle('bg-dark', on);
      footer.classList.toggle('text-light', on);
      footer.classList.toggle('bg-light', !on);
    }
    
    // Sections with bg-light
    sections.forEach(section => {
      if (on) {
        section.classList.remove('bg-light');
        section.classList.add('bg-dark-section');
      } else {
        section.classList.add('bg-light');
        section.classList.remove('bg-dark-section');
      }
    });
    
    // Icons
    icons.forEach(icon => {
      if (on) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
      } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
      }
    });
  }

  // On load, check localStorage
  const darkPref = localStorage.getItem('darkMode') === 'true';
  setDarkMode(darkPref);

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      const isDark = !document.body.classList.contains('bg-dark');
      setDarkMode(isDark);
      localStorage.setItem('darkMode', isDark);
    });
  });
});
