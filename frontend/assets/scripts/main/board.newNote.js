const noteForm__new = document.querySelector('#js--noteForm__add')
const addEventForm = document.querySelectorAll('.js--noteForm')[0]

if(noteForm__new) {
    noteForm__new.addEventListener('click', () => {
        addEventForm.style.display = 'block'
    })
}