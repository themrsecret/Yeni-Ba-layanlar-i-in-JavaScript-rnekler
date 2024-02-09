function changeBodyColor() {
    let rgb = [ ... inputs].reduce((previousValue, currentValue) => {
        localStorage.setItem(currentValue.id, currentValue.value)
        return [ ...previousValue, localStorage.getItem(currentValue.id) || currentValue.value]
}, [])
document.body.style.backgroundColor = `rgba(${rgb.join(',')})`
}

const inputs = document.querySelectorAll('input[type="range"]')
inputs.forEach(input => {

    input.value = localStorage.getItem(input.id) ?? input.value
    input.nextElementSibling.innerText = input.value

    input.addEventListener('input', () => {
        input.nextElementSibling.innerText = input.value
        changeBodyColor()
    })

})

changeBodyColor()
