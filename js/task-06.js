const textInput = document.getElementById('validation-input')
const MAX_DATA_INPUT_LENGTH = Number(textInput.getAttribute('data-length'))

textInput.addEventListener('blur', (event) => {
    const textInputClassList = textInput.classList
    let textLength = event.currentTarget.value.length

    console.log(textLength)

    if (
        textLength === MAX_DATA_INPUT_LENGTH &&
        textInputClassList.contains('invalid')
    ) {
        textInputClassList.replace('invalid', 'valid')
    } else if (textLength === MAX_DATA_INPUT_LENGTH) {
        textInputClassList.add('valid')
    } else if (
        textInputClassList.contains('valid') &&
        textLength !== MAX_DATA_INPUT_LENGTH
    ) {
        textInputClassList.replace('valid', 'invalid')
    } else {
        textInputClassList.add('invalid')
    }
})
