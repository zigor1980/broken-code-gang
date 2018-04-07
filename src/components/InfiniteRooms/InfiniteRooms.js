import * as React from 'react';
import './Infinite.css'

const THRESHOLD = 50;

export class InfiniteRooms extends React.Component {

    state = {
        loading: false,
    };

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.getElementById('scroll').addEventListener('scroll', this.onScroll, { passive: true });
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    componentDidUpdate() {
        this.onScroll();
    }

    onScroll() {
        const page = document.getElementById('scroll');
        if (!this.container || this.state.loading) {
            return;
        }
        let scrollTop = page.scrollTop,
            containerHeight = this.container.clientHeight,
            windowHeight = page.clientHeight;
        if (scrollTop + windowHeight >= containerHeight) {
            this.nextPage();
        }
    }

    async nextPage() {
        this.setState({loading: true});
        try {
            await this.props.fetchNext();
        } catch(err) {
            console.error(err);
        } finally {
            this.setState({loading: false});
        }
    }

    render() {
        return (
            <div className="infinite" id="scroll">
                <div  ref={(container) => this.container = container}>
                    {this.props.children}
                    {this.state.loading && (
                        <div className="spinner">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                            <div className="rect3"></div>
                            <div className="rect4"></div>
                            <div className="rect5"></div>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}
