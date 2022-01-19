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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmVkaXRFdmVudC5qcyIsImJvYXJkLmVkaXROb3RlLmpzIiwiYm9hcmQubmV3Tm90ZS5qcyIsImJvYXJkLnN3aXBlLmpzIiwiaW5wdXQuY2hlY2tib3guanMiLCJtZXNzYWdlcy5qcyIsIm1vZGFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV2ZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy0tZXZlbnRGb3JtJylcclxuY29uc3QgZXZlbnRGb3JtX19zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLS1ldmVudEZvcm1fX3Nob3cnKVxyXG5jb25zdCBldmVudEZvcm1fX3N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy0tZXZlbnRGb3JtX19zdWJtaXQnKVxyXG5cclxuY29uc3QgZXZlbnRGb3JtUmVzZXRGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIGV2ZW50Rm9ybS5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSlcclxuICAgIGV2ZW50Rm9ybV9fc2hvdy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9KVxyXG59XHJcblxyXG5ldmVudEZvcm1fX3Nob3cuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50Rm9ybVJlc2V0RnVuY3Rpb24oKVxyXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9KVxyXG59KVxyXG5cclxuZXZlbnRGb3JtX19zdWJtaXQuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdWJtaXQoKVxyXG4gICAgfSlcclxufSk7IiwiY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtLW5vdGVGb3JtJylcclxuY29uc3Qgbm90ZUZvcm1fX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLS1ub3RlRm9ybV9fY2xvc2UnKVxyXG5jb25zdCBub3RlRm9ybV9fc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy0tbm90ZUZvcm1fX3Nob3cnKVxyXG5jb25zdCBub3RlRm9ybV9fc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLS1ub3RlRm9ybV9fc3VibWl0JylcclxuXHJcbmNvbnN0IG5vdGVGb3JtQ2xvc2VBbGwgPSAoKSA9PiB7XHJcbiAgICBub3RlRm9ybS5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSlcclxuICAgIG5vdGVGb3JtX19zaG93LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH0pXHJcbn1cclxuXHJcbm5vdGVGb3JtX19jbG9zZS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IG5vdGVGb3JtQ2xvc2VBbGwoKSB9KVxyXG59KTtcclxuXHJcbm5vdGVGb3JtX19zaG93LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBub3RlRm9ybUNsb3NlQWxsKClcclxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH0pXHJcbn0pXHJcblxyXG5ub3RlRm9ybV9fc3VibWl0LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN1Ym1pdCgpXHJcbiAgICB9KVxyXG59KSIsImNvbnN0IG5vdGVGb3JtX19uZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtLW5vdGVGb3JtX19hZGQnKVxyXG5jb25zdCBhZGRFdmVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtLW5vdGVGb3JtJylbMF1cclxuXHJcbmlmKG5vdGVGb3JtX19uZXcpIHtcclxuICAgIG5vdGVGb3JtX19uZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkRXZlbnRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICB9KVxyXG59IiwiY29uc3QgYm9hcmRCbG9ja19fY29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZEJsb2NrX19jb250JylcclxuY29uc3QgYm9hcmRCbG9ja19fbmF2X3RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm9hcmRCbG9ja19fbmF2IHNtYWxsJylcclxuY29uc3QgYm9hcmRCbG9ja19fbmF2X3VuZGVybGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZEJsb2NrX19uYXYgLnVuZGVybGluZScpXHJcblxyXG5zd2lwZWQgPSBmYWxzZVxyXG5cclxuY29uc3QgYm9hcmRCbG9ja1N3aWNoID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8IDEwNDApIHtcclxuICAgICAgICBzd2l0Y2gocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgYm9hcmRCbG9ja19fY29udC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNTAlKSdcclxuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2tfX25hdl90ZXh0WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2tfX25hdl90ZXh0WzFdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcclxuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2tfX25hdl91bmRlcmxpbmUuc3R5bGUubGVmdCA9ICc1MCUnXHJcbiAgICAgICAgICAgICAgICBzd2lwZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2tfX2NvbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknXHJcbiAgICAgICAgICAgICAgICBib2FyZEJsb2NrX19uYXZfdGV4dFsxXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICBib2FyZEJsb2NrX19uYXZfdGV4dFswXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICBib2FyZEJsb2NrX19uYXZfdW5kZXJsaW5lLnN0eWxlLmxlZnQgPSAnMCdcclxuICAgICAgICAgICAgICAgIHN3aXBlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IHRvdWNoQWN0aXZlID0gZmFsc2VcclxubGV0IHRvdWNoUG9zaXRpb25YLCB0b3VjaFN0YXJ0LCB0b3VjaEVuZCA9IDBcclxuXHJcbmJvYXJkQmxvY2tfX2NvbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgdG91Y2hTdGFydCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxyXG59KVxyXG5cclxuYm9hcmRCbG9ja19fY29udC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgIHRvdWNoUG9zaXRpb25YID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICBib2FyZEJsb2NrX19uYXZfdW5kZXJsaW5lLnN0eWxlLmxlZnQgPSBzd2lwZWQgPyBcclxuICAgICAgICB0b3VjaFN0YXJ0IDwgdG91Y2hQb3NpdGlvblggPyAnY2FsYyg1MCUgLSA1MHB4KScgOiAnNTAlJyA6IHRvdWNoU3RhcnQgPiB0b3VjaFBvc2l0aW9uWCA/ICc1MHB4JyA6ICcwcHgnXHJcbn0pXHJcblxyXG5ib2FyZEJsb2NrX19jb250LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICB0b3VjaEVuZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcclxuICAgIHRvdWNoRW5kID4gdG91Y2hTdGFydCA/IGJvYXJkQmxvY2tTd2ljaCgnbGVmdCcpIDogYm9hcmRCbG9ja1N3aWNoKCdyaWdodCcpXHJcbn0pXHJcbiIsImNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF5b3V0LS1jaGVja2JveCBpbnB1dCcpXHJcblxyXG5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZmFsc2UpXHJcblxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgISFjaGVja2JveC5jaGVja2VkKVxyXG4gICAgfSlcclxufSkiLCJjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXlvdXQtLW1lc3NhZ2UnKVxyXG5cclxubWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IHRpbWVvdXQgPSAxNTAwICsgKGluZGV4ICogMTAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDUwJSknXHJcbiAgICAgICAgbWVzc2FnZS5zdHlsZS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9LCA1MDApXHJcbiAgICB9KVxyXG59KSIsImNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy0tbW9kYWwnKVxyXG5jb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YXJnZXRdJylcclxuXHJcbm1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcclxuICAgIGNvbnN0IG1vZGFsQ2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuanMtLW1vZGFsLWNsb3NlJylcclxuXHJcbiAgICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH0pXHJcbn0pXHJcblxyXG5vcGVuTW9kYWwuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC50YXJnZXQpXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0pXHJcbn0pIl19
