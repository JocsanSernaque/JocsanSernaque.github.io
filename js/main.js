const iconHamburger = document.querySelector('.fas');
const navBars = document.querySelector('.navbar__links');
const link = document.querySelectorAll('.link__section');

// -----------------------------------------------------
//  Modulo - Nav(Hambueger)
// -----------------------------------------------------
iconHamburger.addEventListener('click', () => {
    navBars.classList.toggle('visibility');
});

window.addEventListener('click', j => {
    if(navBars.classList.contains('visibility') && j.target != navBars && j.target != iconHamburger){
        navBars.classList.toggle('visibility');
    }

});

// -----------------------------------------------------
//  Modulo - link(nav) activo
// -----------------------------------------------------
//recorre todos los link del Nav
link.forEach( (linkItem, e) => {
    // Asigna un click a cada link del Nav
    link[e].addEventListener('click', () =>{
        // Nuevamente recorre todos los link del Nav
        link.forEach((linkItem, e) =>{
            // Quita la clase active de cada link del Nav
            link[e].classList.remove('active')
        });
        // En el link del Nav que hemos dado click agregamos la clase active
        link[e].classList.add('active')
    });
});