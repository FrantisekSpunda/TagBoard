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