const panels = document.querySelectorAll('.panel')
// the variable above stores all div elements under class name panel

panels.forEach(panels => {
    panels.addEventListener('click', () => {
        removeActiveClasses()
        panels.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panels => {
        panels.classList.remove('active')
    })
}