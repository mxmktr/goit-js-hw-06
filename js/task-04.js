let counterValue = 0

const subListenerBtn = document.querySelector('button[data-action="decrement"]')
const addListenerBtn = document.querySelector('button[data-action="increment"]')
const spanData = document.getElementById('value')

const clickSubBtn = (event) => {
    counterValue -= 1
    spanData.textContent = counterValue
}
const clickAddBtn = (event) => {
    counterValue += 1
    spanData.textContent = counterValue
}

subListenerBtn.addEventListener('click', clickSubBtn)
addListenerBtn.addEventListener('click', clickAddBtn)
