const modals = document.querySelectorAll('.js--modal')
const openModal = document.querySelectorAll('[data-target]')

modals.forEach(modal => {
    const modalClose = modal.querySelector('.js--modal-close')

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none'
    })
})

openModal.forEach(button => {
    const target = document.querySelector(button.dataset.target)
    button.addEventListener('click', () => {
        target.style.display = 'flex'
    })
})