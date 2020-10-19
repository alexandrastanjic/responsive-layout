
const btnIconOpen = document.getElementById('btnIconOpen');
const btnIconClose = document.getElementById('btnIconClose');
const mobileMenu = document.getElementById('mobileMenu');


btnIconOpen.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden'); 
});

btnIconClose.addEventListener('click', function() {
  mobileMenu.classList.add('hidden'); 
});
