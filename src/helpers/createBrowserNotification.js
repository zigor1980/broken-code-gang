export default function createBrowserNotification(title, body) {
    const options = {
        body,
    };

    const n = new Notification(title, options);
    setTimeout(n.close.bind(n), 5000); 
}
