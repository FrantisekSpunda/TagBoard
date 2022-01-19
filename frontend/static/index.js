if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('static/sw.js').then(registration => {
        console.log('SW Registred!')
        console.log(registration)
    }).catch(err => {
        console.log('SW Registration Failed!')
        console.log(err)
    })
}