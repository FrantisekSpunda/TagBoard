const checkboxes = document.querySelectorAll('.layout--checkbox input')

checkboxes.forEach(checkbox => {
    checkbox.setAttribute('checked', false)

    checkbox.addEventListener('click', () => {
        checkbox.setAttribute('checked', !!checkbox.checked)
    })
})