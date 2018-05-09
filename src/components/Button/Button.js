import React from 'react';
import './Button.css';

/*
 * возможные значения type:
 *
 * user - иконка пользователя
 * add-user - иконка добавления пользователя
 * add - иконка добавления
 * cancel - иконка отмены
 * delete  - иконка удаления
 * start-chat - иконка начать чат
 * chat - иконка чата
 * settings - иконка настроек
 * search  - иконка поиска
 *
 * modifier - аттрибук меняющий размер иконки
 * s - 30x30
 * m - 64x64
 * l - 100x100
 *
 *circle
 * true - кнопка в виде круга
 * false - квадратная кнопка
 * */
function getIcon(type) {
    const iconSrc = require(`../../assets/icons/${type}.png`);
    return iconSrc || null;
}

export function Button(props) {
    let { modifier } = props;
    const { type, active } = props,
        btnClass = props.circle ? 'Button_circle' : '',
        iconSrc = getIcon(type, active);

    if (!props.modifier) { modifier = 's'; }

    let onClick;

    if (typeof props.onClick === 'function') {
        onClick = e => props.onClick(props.type, e);
    }
    const status = active ? 'active' : 'unactive';
    return (
        <button onClick={onClick} className={`Button ${btnClass} Button_${status}`}>
            <img className={`Button__image Button__image_${modifier}`} src={iconSrc} alt={type} />
        </button>);
}
