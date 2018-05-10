function clickFunc() { alert('Пользователь кликнул на уведомление'); }


export default function sendNotification(title, options) {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    let notification;
    if (!('Notification' in window)) {
        alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    } else if (Notification.permission === 'granted') { // Проверим, есть ли права на отправку уведомлений
    // Если права есть, отправим уведомление
        notification = new Notification(title, options);
        notification.onclick = clickFunc;
    } else if (Notification.permission !== 'denied') { // Если прав нет, пытаемся их получить
        Notification.requestPermission((permission) => {
            // Если права успешно получены, отправляем уведомление
            if (permission === 'granted') {
                notification = new Notification(title, options);
            }
            // Юзер отклонил наш запрос на показ уведомлений
        });
    } else {
    // Пользователь ранее отклонил наш запрос на показ уведомлений
    // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
    }
}
