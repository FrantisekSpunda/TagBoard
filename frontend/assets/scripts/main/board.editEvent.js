const eventForm = document.querySelectorAll('.js--eventForm')
const eventForm__show = document.querySelectorAll('.js--eventForm__show')
const eventForm__submit = document.querySelectorAll('.js--eventForm__submit')

const eventFormResetFunction = () => {
    eventForm.forEach(form => {
        form.style.display = 'none'
    })
    eventForm__show.forEach(button => {
        button.parentElement.parentElement.style.display = 'flex'
    })
}

eventForm__show.forEach(button => {
    button.addEventListener('click', () => {
        eventFormResetFunction()
        button.parentElement.parentElement.nextElementSibling.style.display = 'block'
        button.parentElement.parentElement.style.display = 'none'
    })
})

eventForm__submit.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.parentElement.submit()
    })
});