const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus()
        item.classList.add('selected')
    })
})

const removeFocus = () => {
    items.forEach(el => {
        el.classList.remove('selected')
    })
}