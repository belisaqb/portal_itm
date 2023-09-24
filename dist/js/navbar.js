document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');

    var imgUser = document.querySelector('.img-user');
        var notifications = document.querySelector('.notifications');

    navbarCollapse.addEventListener('show.bs.collapse', function () {
        // Navbar está colapsando
    
        imgUser.innerHTML = '<button class="nav-buttons semibold-ligth-green-med">USUARIO</button>';
        notifications.innerHTML = '<button class="nav-buttons semibold-ligth-green-med">NOTIFICACIONES</button>';
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        // Navbar se está expandiendo

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


    //fucion para que si el sidebar esta abierto, el btnhamburger lo cierre
    btnHamburger.addEventListener('click', () => {
        if (optionsContainer.classList.contains("show")) {
            optionsContainer.classList.remove("show");
            optionsContainer.classList.add("hide");
            optionsContainer.style.display= 'none';
            elementoVisible.style.top = 170 + 'px'; // Restaura la posición original

        } 
    });


    //fucion para que si el btnhamburger esta abierto, el sidebar lo cierre
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
        if (divCollapse.classList.contains("show")) {
            divCollapse.classList.remove("show"); // Muestra el div si se cumple la condición
            elementoVisible.style.top = '0'; // Restaura la posición original
            optionsContainer.style.top = '0'; // Restaura la posición original
        } 
    });


//funcion para que si el btnhamburger esta habierto y se extiende la pagina a mas de 991px, este se cierre
    var divCollapse = document.querySelector(".div-collapse");
    var ulElement = divCollapse.querySelector("ul");

    function updateAriaExpanded() {
    if (window.innerWidth > 991 && divCollapse.classList.contains("show")) {
          divCollapse.classList.remove("show"); // Muestra el div si se cumple la condición
          ulElement.style.display = "inherit"; // Usa "inherit" para el ul

          elementoVisible.style.top = '0'; // Restaura la posición original
          optionsContainer.style.top = '0'; // Restaura la posición original

        imgUser.innerHTML = '<button class="nav-buttons"><img src="svg/user.svg" alt="user"></button>';
        notifications.innerHTML = '<button class="nav-buttons"><img src="svg/campaing.svg" alt="user"></button>';

        }
      }
    window.addEventListener("resize", updateAriaExpanded); // Escuchar cambios de tamaño de ventana

});



