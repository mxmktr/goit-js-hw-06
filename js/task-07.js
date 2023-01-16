const fontSizeControl = document.getElementById('font-size-control')
const spanText = document.getElementById('text')

fontSizeControl.addEventListener('input', (event) => {
    const textSize = event.currentTarget.value
    spanText.style.fontSize = `${textSize}px`
})
