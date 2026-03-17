
// ========== Smooth Scroll ==========
document.querySelectorAll('a[href*="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(event) {
    var href = this.getAttribute('href');
    if (href === '#' || href === '#0') return;
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var target = document.querySelector(this.hash);
      if (!target) {
        target = document.querySelector('[name=' + this.hash.slice(1) + ']');
      }
      if (target) {
        event.preventDefault();
        var targetTop = target.getBoundingClientRect().top + window.pageYOffset - 10;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    }
  });
});

// ========== Menu Toggle ==========
document.querySelectorAll('#menuToggle, .menu-close, .nav-link').forEach(function(el) {
  el.addEventListener('click', function() {
    document.getElementById('menuToggle').classList.toggle('active');
    document.getElementById('theMenu').classList.toggle('menu-open');
  });
});

// ========== Toggle Theme Button ==========
document.querySelector('a.toggler').addEventListener('click', function() {
  document.body.classList.toggle('body-light');
  this.classList.toggle('off');
});
