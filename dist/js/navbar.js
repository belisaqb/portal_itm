document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarCollapse.addEventListener('show.bs.collapse', function () {
        // Navbar está colapsando
        var imgUser = document.querySelector('.img-user');
        var notifications = document.querySelector('.notifications');

        imgUser.innerHTML = '<button class="nav-buttons semibold-ligth-green-med">USUARIO</button>';
        notifications.innerHTML = '<button class="nav-buttons semibold-ligth-green-med">NOTIFICACIONES</button>';
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        // Navbar se está expandiendo
        var imgUser = document.querySelector('.img-user');
        var notifications = document.querySelector('.notifications');

        imgUser.innerHTML = '<button class="nav-buttons"><img src="svg/user.svg" alt="user"></button>';
        notifications.innerHTML = '<button class="nav-buttons"><img src="svg/campaing.svg" alt="user"></button>';
    });

    // JavaScript para mostrar y posicionar el elemento siempre visible debajo de las opciones del menú
    const btnHamburger = document.querySelector('.btn-hamburguer');
    const menuOptions = document.querySelector('.navbar-nav');
    const elementoVisible = document.querySelector('.floating-filter');
    const optionsContainer = document.getElementById('optionsContainer');

    btnHamburger.addEventListener('click', () => {
        if (menuOptions.style.display === 'inherit' || menuOptions.style.display === '') {
            menuOptions.style.display = 'block';
            elementoVisible.style.top = 170 + 'px'; // Ajusta la posición debajo de las opciones
            optionsContainer.style.top = 170 + 'px'; // Ajusta la posición debajo de las opciones
            console.log(menuOptions.clientHeight);
        } else {
            menuOptions.style.display = 'inherit';
            elementoVisible.style.top = '0'; // Restaura la posición original
            optionsContainer.style.top = '0'; // Restaura la posición original
        }
    });

});


