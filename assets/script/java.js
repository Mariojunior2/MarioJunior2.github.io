function CoresAletor() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function MudarCores() {
    const elements = document.querySelectorAll('#content, #content *:not(script):not(style)');

    elements.forEach(element => {
        element.style.color = CoresAletor();
    });
}

setInterval(MudarCores, 350);

