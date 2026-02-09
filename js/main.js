document.addEventListener('DOMContentLoaded', function(){
  // Active link highlight
  const path = location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.main-nav a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active')
  })
})
