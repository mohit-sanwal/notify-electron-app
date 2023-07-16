new Notification('email notification', {body: 'show email content'}).onclick = () => {
    window.electronApi.notifyApp(true);
}