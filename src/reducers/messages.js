const DEFAULT_MESSAGES = [
    {
        id: 1, // Идентификатор сообщения
        userId: 'Боб', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Привет ребятишки', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 2, // Идентификатор сообщения
        userId: 'Патрик', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Hi!!', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 3, // Идентификатор сообщения
        userId: 'Наклз', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Do u now de wae?', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 4, // Идентификатор сообщения
        userId: 'Патрик', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Yeah!!!', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 5, // Идентификатор сообщения
        userId: 'Боб', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Кнок кнок кнок кнок', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 6, // Идентификатор сообщения
        userId: 'Золушка', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'У меня мачеха злая, заставила весь дом вымыть', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 7, // Идентификатор сообщения
        userId: 'Яндексмэн', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Пишите ребятки код, не откладывайте на потом', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 8, // Идентификатор сообщения
        userId: 'Боб', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Все уже сделали домашнее задание?', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 9, // Идентификатор сообщения
        userId: 'Яндексмэн', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Конечно, у меня уже давно все готово', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 10, // Идентификатор сообщения
        userId: 'Золушка', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'А я еще нет', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }, {
        id: 11, // Идентификатор сообщения
        userId: 'Патрик', // Идентификатор пользователя, отправившего сообщение (User._id)
        message: 'Дааа, пора бы уже поторопиться бы', // Текстовое сообщение
        created_at: new Date().toDateString(), // Timestamp времени отправки
    }];

const messages = (state, action) => {
    if (!state) {
        return DEFAULT_MESSAGES;
    }

    switch (action.type) {
    case 'ADD_MESSAGE':
        return [...state, action.message];
    case 'REMOVE_MESSAGE':
        return;
    case 'READ_MESSAGE':
        return;
    default:
        return state;
    }
};

export default messages;
