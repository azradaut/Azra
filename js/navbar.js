const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
       navItems.forEach(navItem => {
        navItem.classList.remove('active');
       });

       navItem.classList.add('active');
    });
});