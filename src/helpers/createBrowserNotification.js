export default function createBrowserNotification(title, body, icon = '') {
    const options = {
        body,
        icon,
    };

    const n = new Notification(title,options);
    setTimeout(n.close.bind(n), 5000); 
}
