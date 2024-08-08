// change icon (dark mode)
const mode = document.querySelector('.mode');
const icon = document.querySelector('.fa-moon');
const garuda = document.querySelector('.garuda-siluet');

mode.addEventListener('click', function(){
     document.body.classList.toggle('dark-mode');

     if(document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
          garuda.classList.add('garuda-dark');
     }
     else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
          garuda.classList.remove('garuda-dark');
     }
});


// change toggle-btn navbar
const bars = document.querySelector('.toggle-btn');
const navbar = document.querySelector('header .navbar');

bars.addEventListener('click', function() {
     if(bars.classList.contains('fa-bars')) {
          bars.classList.remove('fa-bars');
          bars.classList.add('fa-xmark');
          navbar.classList.add('slide');
     }
     else {
          bars.classList.remove('fa-xmark');
          bars.classList.add('fa-bars');
          navbar.classList.remove('slide');
     }
})

document.addEventListener('DOMContentLoaded', function() {
     const navbarLinks = document.querySelectorAll('header .navbar a');
     const sections = document.querySelectorAll('section');
     
     navbarLinks.forEach(link => {
          link.addEventListener('click', function(event) {
               event.preventDefault(); // Mencegah aksi default dari link
               const targetID = link.getAttribute('href').substring(1); // Mengambil ID target tanpa #
               sections.forEach(section => {
                    if (section.id === targetID) {
                         section.classList.remove('hidden'); // Menampilkan elemen target
                    } else {
                         section.classList.add('hidden'); // Menyembunyikan elemen lain
                    }
               });
          });
     });
});
