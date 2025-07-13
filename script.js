// Smooth scroll for anchor links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    document.getElementById(id)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Simple contact form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  const [name, email, message] = ['name','email','message'].map(id =>
    document.getElementById(id).value.trim()
  );
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
  }
});

// Auto‐activate the current tab more precisely
const tabs = document.querySelectorAll('.nav-container .tab');
const { pathname, hash } = window.location;  
// e.g. pathname = "/projects/index.html" or "/" ; hash = "#about" or ""

tabs.forEach(tab => {
  const href = tab.getAttribute('href');

  if (href.startsWith('#')) {
    // for in‐page anchors, compare to location.hash
    if (href === hash || (href === '#about' && pathname === '/')) {
      tab.classList.add('active');
    }
  } else {
    // for file links, compare full pathname suffix
    // ensure trailing slash maps to root index
    const fullPath = pathname.endsWith('/') ? '/index.html' : pathname;
    if (fullPath.endsWith(href)) {
      tab.classList.add('active');
    }
  }
});
