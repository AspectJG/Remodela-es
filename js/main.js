// JS simples: menu móvel, lightbox de galeria e scroll suave

document.addEventListener('DOMContentLoaded', function() {
  // nav toggle
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (btn) {
    btn.addEventListener('click', function() {
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
      }
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (nav && window.innerWidth <= 800) nav.style.display = 'none';
      }
    })
  });

  // gallery lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox.querySelector('.lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(function(img) {
    img.addEventListener('click', function() {
      var src = this.dataset.full || this.src;
      lightboxImg.src = src;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', function() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });

  // close on click outside
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

});
