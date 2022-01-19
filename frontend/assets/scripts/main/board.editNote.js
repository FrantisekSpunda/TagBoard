const noteForm = document.querySelectorAll('.js--noteForm')
const noteForm__close = document.querySelectorAll('.js--noteForm__close')
const noteForm__show = document.querySelectorAll('.js--noteForm__show')
const noteForm__submit = document.querySelectorAll('.js--noteForm__submit')

const noteFormCloseAll = () => {
    noteForm.forEach(form => {
        form.style.display = 'none'
    })
    noteForm__show.forEach(button => {
        button.parentElement.parentElement.parentElement.style.display = 'block'
    })
}

noteForm__close.forEach(button => {
    button.addEventListener('click', () => { noteFormCloseAll() })
});

noteForm__show.forEach(button => {
    button.addEventListener('click', () => {
        noteFormCloseAll()
        button.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'block'
        button.parentElement.parentElement.parentElement.style.display = 'none'
    })
})

noteForm__submit.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.submit()
    })
})