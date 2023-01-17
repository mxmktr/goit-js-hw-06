function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const inputHandler = document.querySelector('div#controls input')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')

const outputBoxes = document.getElementById('boxes')
let baseHeight = 30
let baseWidth = 30

function createBoxes(amount) {
    if (Number(amount) === 0) {
        return
    }

    const divElCol = []

    for (let i = 1; i <= amount; i++) {
        const divElement = document.createElement('div')
        divElement.style.backgroundColor = getRandomHexColor()
        divElement.style.width = `${baseWidth}px`
        divElement.style.height = `${baseHeight}px`
        divElCol.push(divElement)
        baseHeight += 10
        baseWidth += 10
    }
    outputBoxes.append(...divElCol)
}

function destroyBoxes() {
    outputBoxes.innerHTML = ''
    baseHeight = 30
    baseWidth = 30
}

let amount = 0

inputHandler.addEventListener('input', (event) => {
    amount = event.currentTarget.value
})

createBtn.addEventListener('click', () => {
    createBoxes(amount)
})

destroyBtn.addEventListener('click', () => {
    destroyBoxes()
})
