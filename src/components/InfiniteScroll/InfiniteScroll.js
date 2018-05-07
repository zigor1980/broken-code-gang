import * as React from 'react';

const THRESHOLD = 300;


/*
 * Принимает следующие аттрибуты:
 *
 * fetchNext - функция которая подгружает содержимое,
 * в качестве примера для загрузки сообщений
 * this.fetchNext = this.props.dispatch.bind(this,fetchMessages(roomId));
 *
 * scrollDirection - аттрибут отвечающий в какую сторону происходит скролл:
 * 'down' - вниз
 * 'up' - вверх
 *
 * next - аттрибут показывающий есть ли еще элементы
 * */
export class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
        this.onScroll = this.onScroll.bind(this);
    }
    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, { passive: true });
        this.onScroll();
    }

    componentDidUpdate() {
        if (document.documentElement.scrollTop + window.innerHeight + 254 >= document.documentElement.scrollHeight) {
            document.documentElement.scrollTop = document.documentElement.scrollHeight;
        }
        this.onScroll();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        if (!this.container || this.state.loading) {
            return;
        }
        const containerHeight =
        this.container.children && this.container.children[0] && this.container.children[0].clientHeight,
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            windowHeight = window.innerHeight;
        // Если мы скроллим вверх
        if (this.props.scrollDirection === 'up' && scrollTop < THRESHOLD && this.props.next) {
            document.documentElement.scrollTop = 1.01 * THRESHOLD;
            this.nextPage();
        } else if (
            this.props.scrollDirection === 'down' &&
            scrollTop + windowHeight > containerHeight - THRESHOLD && this.props.next
        ) {
            document.documentElement.scrollTop = 0.99 * (containerHeight - THRESHOLD - windowHeight);
            this.nextPage();
        }
    }

    async nextPage() {
        this.setState({ loading: true });
        try {
            await this.props.fetchNext();
        } catch (err) {
            console.error(err);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <div className="InfiniteScroll" ref={(container) => { this.container = container; }} >
                {this.props.children}
            </div>
        );
    }
}
