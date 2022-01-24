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
const noteForm__new = document.querySelector('#js--noteForm__add')
const addEventForm = document.querySelectorAll('.js--noteForm')[0]

if(noteForm__new) {
    noteForm__new.addEventListener('click', () => {
        addEventForm.style.display = 'block'
    })
}
const boardBlock__cont = document.querySelector('#boardBlock__cont')
const boardBlock__nav_text = document.querySelectorAll('#boardBlock__nav small')
const boardBlock__nav_underline = document.querySelector('#boardBlock__nav .underline')

swiped = false

const boardBlockSwich = (position) => {
    if (window.screen.width < 1040) {
        switch(position) {
            case 'right':
                boardBlock__cont.style.transform = 'translateX(-50%)'
                boardBlock__nav_text[0].classList.remove('selected')
                boardBlock__nav_text[1].classList.add('selected')
                boardBlock__nav_underline.style.left = '50%'
                swiped = true
                break
            case 'left':
                boardBlock__cont.style.transform = 'translateX(0)'
                boardBlock__nav_text[1].classList.remove('selected')
                boardBlock__nav_text[0].classList.add('selected')
                boardBlock__nav_underline.style.left = '0'
                swiped = false
                break
        }
    }
}

let touchActive = false
let touchPositionX, touchStart, touchEnd = 0

boardBlock__cont.addEventListener('touchstart', (event) => {
    touchStart = event.touches[0].clientX
})

boardBlock__cont.addEventListener('touchmove', (event) => {
    touchPositionX = event.touches[0].clientX
    boardBlock__nav_underline.style.left = swiped ? 
        touchStart < touchPositionX ? 'calc(50% - 50px)' : '50%' : touchStart > touchPositionX ? '50px' : '0px'
})

boardBlock__cont.addEventListener('touchend', (event) => {
    touchEnd = event.changedTouches[0].clientX
    touchEnd > touchStart ? boardBlockSwich('left') : boardBlockSwich('right')
})

const checkboxes = document.querySelectorAll('.layout--checkbox input')

checkboxes.forEach(checkbox => {
    checkbox.setAttribute('checked', false)

    checkbox.addEventListener('click', () => {
        checkbox.setAttribute('checked', !!checkbox.checked)
    })
})
const messages = document.querySelectorAll('.layout--message')

messages.forEach((message, index) => {
    return new Promise((resolve, reject) => {
        let timeout = 1500 + (index * 100)
        setTimeout(resolve, timeout);
    }).then(() => {
        message.style.transform = 'translateX(50%)'
        message.style.opacity = 0
        setTimeout(() => {
            message.style.display = 'none'
        }, 500)
    })
})
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
Notification.requestPermission((status) => {
    console.log('Notification permission status: ', status)
})

const displayNotification = () => {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration()
        .then((reg) => {
            reg.showNotification('Hello world!')
        })
    }
}

let options = {
    body: 'Here is a notification body.',
    vibrate: [100, 50, 100],
    data: { primaryKey: 1 }
}
reg.showNotification('Hello world.', options)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmVkaXRFdmVudC5qcyIsImJvYXJkLmVkaXROb3RlLmpzIiwiYm9hcmQubmV3Tm90ZS5qcyIsImJvYXJkLnN3aXBlLmpzIiwiaW5wdXQuY2hlY2tib3guanMiLCJtZXNzYWdlcy5qcyIsIm1vZGFscy5qcyIsInB3YS5ub3RpZmljYWl0b25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXZlbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLS1ldmVudEZvcm0nKVxyXG5jb25zdCBldmVudEZvcm1fX3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtLWV2ZW50Rm9ybV9fc2hvdycpXHJcbmNvbnN0IGV2ZW50Rm9ybV9fc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLS1ldmVudEZvcm1fX3N1Ym1pdCcpXHJcblxyXG5jb25zdCBldmVudEZvcm1SZXNldEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgZXZlbnRGb3JtLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9KVxyXG4gICAgZXZlbnRGb3JtX19zaG93LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0pXHJcbn1cclxuXHJcbmV2ZW50Rm9ybV9fc2hvdy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnRGb3JtUmVzZXRGdW5jdGlvbigpXHJcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH0pXHJcbn0pXHJcblxyXG5ldmVudEZvcm1fX3N1Ym1pdC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN1Ym1pdCgpXHJcbiAgICB9KVxyXG59KTsiLCJjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy0tbm90ZUZvcm0nKVxyXG5jb25zdCBub3RlRm9ybV9fY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtLW5vdGVGb3JtX19jbG9zZScpXHJcbmNvbnN0IG5vdGVGb3JtX19zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLS1ub3RlRm9ybV9fc2hvdycpXHJcbmNvbnN0IG5vdGVGb3JtX19zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtLW5vdGVGb3JtX19zdWJtaXQnKVxyXG5cclxuY29uc3Qgbm90ZUZvcm1DbG9zZUFsbCA9ICgpID0+IHtcclxuICAgIG5vdGVGb3JtLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9KVxyXG4gICAgbm90ZUZvcm1fX3Nob3cuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgfSlcclxufVxyXG5cclxubm90ZUZvcm1fX2Nsb3NlLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgbm90ZUZvcm1DbG9zZUFsbCgpIH0pXHJcbn0pO1xyXG5cclxubm90ZUZvcm1fX3Nob3cuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG5vdGVGb3JtQ2xvc2VBbGwoKVxyXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSlcclxufSlcclxuXHJcbm5vdGVGb3JtX19zdWJtaXQuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3VibWl0KClcclxuICAgIH0pXHJcbn0pIiwiY29uc3Qgbm90ZUZvcm1fX25ldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy0tbm90ZUZvcm1fX2FkZCcpXHJcbmNvbnN0IGFkZEV2ZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy0tbm90ZUZvcm0nKVswXVxyXG5cclxuaWYobm90ZUZvcm1fX25ldykge1xyXG4gICAgbm90ZUZvcm1fX25ldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhZGRFdmVudEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH0pXHJcbn0iLCJjb25zdCBib2FyZEJsb2NrX19jb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkQmxvY2tfX2NvbnQnKVxyXG5jb25zdCBib2FyZEJsb2NrX19uYXZfdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNib2FyZEJsb2NrX19uYXYgc21hbGwnKVxyXG5jb25zdCBib2FyZEJsb2NrX19uYXZfdW5kZXJsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkQmxvY2tfX25hdiAudW5kZXJsaW5lJylcclxuXHJcbnN3aXBlZCA9IGZhbHNlXHJcblxyXG5jb25zdCBib2FyZEJsb2NrU3dpY2ggPSAocG9zaXRpb24pID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDwgMTA0MCkge1xyXG4gICAgICAgIHN3aXRjaChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICBib2FyZEJsb2NrX19jb250LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJ1xyXG4gICAgICAgICAgICAgICAgYm9hcmRCbG9ja19fbmF2X3RleHRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgYm9hcmRCbG9ja19fbmF2X3RleHRbMV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgYm9hcmRCbG9ja19fbmF2X3VuZGVybGluZS5zdHlsZS5sZWZ0ID0gJzUwJSdcclxuICAgICAgICAgICAgICAgIHN3aXBlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgYm9hcmRCbG9ja19fY29udC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSdcclxuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2tfX25hdl90ZXh0WzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2tfX25hdl90ZXh0WzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcclxuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2tfX25hdl91bmRlcmxpbmUuc3R5bGUubGVmdCA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgc3dpcGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgdG91Y2hBY3RpdmUgPSBmYWxzZVxyXG5sZXQgdG91Y2hQb3NpdGlvblgsIHRvdWNoU3RhcnQsIHRvdWNoRW5kID0gMFxyXG5cclxuYm9hcmRCbG9ja19fY29udC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXHJcbn0pXHJcblxyXG5ib2FyZEJsb2NrX19jb250LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgdG91Y2hQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgIGJvYXJkQmxvY2tfX25hdl91bmRlcmxpbmUuc3R5bGUubGVmdCA9IHN3aXBlZCA/IFxyXG4gICAgICAgIHRvdWNoU3RhcnQgPCB0b3VjaFBvc2l0aW9uWCA/ICdjYWxjKDUwJSAtIDUwcHgpJyA6ICc1MCUnIDogdG91Y2hTdGFydCA+IHRvdWNoUG9zaXRpb25YID8gJzUwcHgnIDogJzBweCdcclxufSlcclxuXHJcbmJvYXJkQmxvY2tfX2NvbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcclxuICAgIHRvdWNoRW5kID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgdG91Y2hFbmQgPiB0b3VjaFN0YXJ0ID8gYm9hcmRCbG9ja1N3aWNoKCdsZWZ0JykgOiBib2FyZEJsb2NrU3dpY2goJ3JpZ2h0JylcclxufSlcclxuIiwiY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXlvdXQtLWNoZWNrYm94IGlucHV0JylcclxuXHJcbmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBmYWxzZSlcclxuXHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAhIWNoZWNrYm94LmNoZWNrZWQpXHJcbiAgICB9KVxyXG59KSIsImNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxheW91dC0tbWVzc2FnZScpXHJcblxyXG5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgdGltZW91dCA9IDE1MDAgKyAoaW5kZXggKiAxMDApXHJcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0KTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoNTAlKSdcclxuICAgICAgICBtZXNzYWdlLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pXHJcbn0pIiwiY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLS1tb2RhbCcpXHJcbmNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhcmdldF0nKVxyXG5cclxubW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xyXG4gICAgY29uc3QgbW9kYWxDbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5qcy0tbW9kYWwtY2xvc2UnKVxyXG5cclxuICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSlcclxufSlcclxuXHJcbm9wZW5Nb2RhbC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LnRhcmdldClcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfSlcclxufSkiLCJOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKHN0YXR1cykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ05vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIHN0YXR1czogJywgc3RhdHVzKVxyXG59KVxyXG5cclxuY29uc3QgZGlzcGxheU5vdGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKClcclxuICAgICAgICAudGhlbigocmVnKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZy5zaG93Tm90aWZpY2F0aW9uKCdIZWxsbyB3b3JsZCEnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBvcHRpb25zID0ge1xyXG4gICAgYm9keTogJ0hlcmUgaXMgYSBub3RpZmljYXRpb24gYm9keS4nLFxyXG4gICAgdmlicmF0ZTogWzEwMCwgNTAsIDEwMF0sXHJcbiAgICBkYXRhOiB7IHByaW1hcnlLZXk6IDEgfVxyXG59XHJcbnJlZy5zaG93Tm90aWZpY2F0aW9uKCdIZWxsbyB3b3JsZC4nLCBvcHRpb25zKSJdfQ==
