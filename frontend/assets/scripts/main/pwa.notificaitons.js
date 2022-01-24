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