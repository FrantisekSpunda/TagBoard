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
