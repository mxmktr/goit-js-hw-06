const nameInput = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

nameInput.addEventListener('input', (event) => {
    let text = event.currentTarget.value
    if (text.length) {
        nameOutput.textContent = text
    } else {
        nameOutput.textContent = 'Anonymous'
    }
})
