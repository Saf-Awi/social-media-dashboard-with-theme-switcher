const switchCheckbox = document.getElementById('switch');
const switchHandle = document.querySelector('.switch-handle');
const switchLabel = document.querySelector('.switch-container');



switchHandle.addEventListener('click', () => {
    switchCheckbox.checked = !switchCheckbox.checked;
    const translateXValue = switchCheckbox.checked ? '-20px' : '0';
    switchHandle.style.transform = `translateX(${translateXValue})`;
    switchColor();
});

switchLabel.addEventListener('click', () => {
    switchCheckbox.checked = !switchCheckbox.checked;
    const translateXValue = switchCheckbox.checked ? '-20px' : '0';
    switchHandle.style.transform = `translateX(${translateXValue})`;
    switchColor();
});

function switchColor() {
    const isDark = switchCheckbox.checked; 
    switchLabel.style.background = isDark ? 'hsl(91, 63%, 79%)' : 'hsl(192, 72%, 79%)';

    const whiteHeader = document.querySelectorAll('.whiteHeader');
    const body = document.body;
    const card = document.querySelectorAll('.card');

    if (isDark) {
        whiteHeader.forEach(header => header.classList.add('dark-mode-h1'));
        body.classList.add('dark-main');
        card.forEach(cardItem => cardItem.classList.add('dark-mode-bg'));
        switchHandle.classList.add('dark-mode-bg');

    } else {
        whiteHeader.forEach(header => header.classList.remove('dark-mode-h1'));
        body.classList.remove('dark-main');
        card.forEach(cardItem => cardItem.classList.remove('dark-mode-bg'));
        switchHandle.classList.remove('dark-mode-bg');


    }
}

switchColor();