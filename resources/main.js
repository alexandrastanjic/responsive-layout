
const btnIconOpen = document.getElementById('btnIconOpen');
const btnIconClose = document.getElementById('btnIconClose');

btnIconOpen.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden'); 
});

btnIconClose.addEventListener('click', function() {
  mobileMenu.classList.add('hidden'); 
});
