const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')


red.addEventListener('click', () => {
    setTimeout(() => {
        red.style.background = red
        red.style.opacity = 1
        setTimeout(() => {
            red.style.background = red
            red.style.opacity = 0.5
        }, 3000);
    }, 1);
})
yellow.addEventListener('click', () => {
    setTimeout(() => {

        yellow.style.opacity = 1
        setTimeout(() => {

            yellow.style.opacity = 0.5
        }, 3000);
    }, 1);
})
green.addEventListener('click', () => {
    setTimeout(() => {

        green.style.opacity = 1
        setTimeout(() => {

            green.style.opacity = 0.5
        }, 3000);
    }, 1);
})