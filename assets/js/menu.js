const openMenu = document.querySelector('#open-menu');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    // Define a posição inicial do menu à direita fora da tela (largura do menu vezes -1)
    menu.style.right = (menu.offsetWidth * -1) + 'px';

    // Define um temporizador para a transição suave do menu
    setTimeout(() => {
        menu.style.opacity = '1';

        // Define a posição do menu como 0 pixels da borda direita (totalmente visível)
        menu.style.right = '0';
        openMenu.style.display = 'none';
    }, 10);

    menu.style.opacity = '1';
});

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';

    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
    
    menu.removeAttribute('style');
});