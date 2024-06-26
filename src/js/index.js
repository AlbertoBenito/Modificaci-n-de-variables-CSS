// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const rootStyles = document.documentElement.style

rootStyles.setProperty('--primary-color-red', 'green')

// # Ejercicios

// ## VARIABLES CSS

// - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

const widthScroll = document.documentElement.style;

// - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

const scrollElement = document.getElementById('px')

const setBoxScroll  = event => {
    const totalHight = document.body.scrollHeight - window.innerHeight;
    const  userScroll = window.scrollY
    const boxWidth = (userScroll * 100 / totalHight)

    scrollElement.textContent = Math.round(userScroll)

rootStyles.setProperty ('--width',boxWidth + '%')
    
}

window.addEventListener('scroll',setBoxScroll)





// - Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón

const buttonRGB = document.getElementById ('rgb')
const buttonHEXA = document.getElementById ('hexa')

const generateRgbColor = () =>{
    
    const red = Math.floor(Math.random  () * 255)
    const blue = Math.floor(Math.random () * 255)
    const green = Math.floor(Math.random () * 255)

    const color = `rgb(${red} ${blue} ${green})`
    rootStyles.setProperty('--bg--body',color)
}

const generateHexaColor = () => {
    const hexaNumbers = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){
        const number1 = Math.floor(Math.random () * hexaNumbers.length -1)
        color += hexaNumbers.charAt(number1)
    }

    rootStyles.setProperty('--bg--body',color)
}

buttonRGB.addEventListener('click', generateRgbColor)
buttonHEXA.addEventListener('click', generateHexaColor)


// - Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.

const setBoxPosition = event =>{
    rootStyles.setProperty ('--top', event.y + ('px'))
    rootStyles.setProperty ('--left', event.x +('px'))
}
window.addEventListener('mousemove', setBoxPosition)