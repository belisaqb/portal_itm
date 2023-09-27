document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var imgUser = document.querySelector('.img-user');
    var notifications = document.querySelector('.notifications');
    var divCollapse = document.querySelector(".div-collapse");
    var ulElement = divCollapse.querySelector("ul");

    navbarCollapse.addEventListener('show.bs.collapse', function () {
        // Navbar está colapsando
        imgUser.innerHTML = '<button class="nav-buttons semibold-ligth-green-med">USUARIO</button>';
        notifications.innerHTML = '<button class="nav-buttons semibold-ligth-green-med">NOTIFICACIONES</button>';
        
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        // Navbar está expandiendo
        setTimeout(function() {
            imgUser.innerHTML = '<button class="nav-buttons"><img src="svg/user.svg" alt="user"></button>';
            notifications.innerHTML = '<button class="nav-buttons"><img src="svg/campaing.svg" alt="user"></button>';
        }, 100);
    });

    function updateAriaExpanded() {
        if (window.innerWidth > 991 && divCollapse.classList.contains("show")) {
            divCollapse.classList.remove("show");
            ulElement.style.display = "inherit";

            elementoVisible.style.top = '0';
            optionsContainer.style.top = '0';

            imgUser.innerHTML = '<button class="nav-buttons"><img src="svg/user.svg" alt="user"></button>';
            notifications.innerHTML = '<button class="nav-buttons"><img src="svg/campaing.svg" alt="user"></button>';
        }
    }

    window.addEventListener("resize", updateAriaExpanded);
    // Llamar a la función al cargar la página
    updateAriaExpanded();


    const btnHamburger = document.querySelector('.btn-hamburguer');
    const menuOptions = document.querySelector('.navbar-nav');
    const elementoVisible = document.querySelector('.floating-filter');
    const optionsContainer = document.getElementById('optionsContainer');

    let animacionEnCurso = false;

    btnHamburger.addEventListener('click', () => {
        if (animacionEnCurso) return;

        animacionEnCurso = true;

        if (menuOptions.style.display === 'inherit' || menuOptions.style.display === '') {
            menuOptions.style.display = 'block';

            // Añadir animación al desplazamiento
            elementoVisible.style.transition = 'top 0.3s ease';
            optionsContainer.style.transition = 'top 0.3s ease';

            // Ajusta la posición debajo de las opciones
            setTimeout(() => {
                elementoVisible.style.top = '178px';
                optionsContainer.style.top = '170px';

                // Habilitar el botón después de la animación
                setTimeout(() => {
                    animacionEnCurso = false;
                }, 300); // 0.3 segundos es la duración de la animación
            }, 0);

        } else {
            menuOptions.style.display = 'inherit';

            // Añadir animación al desplazamiento
            elementoVisible.style.transition = 'top 0.3s ease';
            optionsContainer.style.transition = 'top 0.3s ease';

            // Restaura la posición original
            setTimeout(() => {
                elementoVisible.style.top = '0';
                optionsContainer.style.top = '0';

                // Habilitar el botón después de la animación
                setTimeout(() => {
                    animacionEnCurso = false;
                }, 300); // 0.3 segundos es la duración de la animación
            }, 0);
        }
    });
});


/*
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
        } else {
            menuOptions.style.display = 'inherit';
            elementoVisible.style.top = '0'; // Restaura la posición original
            optionsContainer.style.top = '0'; // Restaura la posición original
        }
    });


    // cierra el sidebar si esta abierto  
    //fucion para que si el sidebar esta abierto, el btnhamburger lo cierre
    btnHamburger.addEventListener('click', () => {
        if (optionsContainer.classList.contains("show")) {
            optionsContainer.classList.remove("show");
            optionsContainer.classList.add("hide");
            //optionsContainer.style.display= 'none';
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
    
    */