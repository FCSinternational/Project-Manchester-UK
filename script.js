// Highlight current nav link
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const target = a.getAttribute('href');
    if ((here === '' && target === 'index.html') || here === target) {
      a.classList.add('active');
    }
  });
})();

// Footer year
(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
