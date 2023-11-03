// Obtenemos referencias a los elementos del menú
const burger = document.getElementById('burger');
const menuList = document.getElementById('menu-list');

// Agregamos un evento de clic al menú hamburguesa
burger.addEventListener('click', () => {
  // Alternamos la visibilidad de la lista desplegable
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
});
