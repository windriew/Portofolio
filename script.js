let menuIcon = document.querySelector('#hamburger');
let navbar = document.querySelector('.nav-links');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// MENAMBAHKAN CLASS ACTIVE PADA LINK YANG AKTIF
// Jika halaman di-scroll
window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            let activeLink = document.querySelector(
                'header nav a[href="#' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};


// Jika tombol hamburger diklik
menuIcon.onclick = () => {

    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');

};