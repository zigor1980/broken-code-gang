import * as React from 'react';
import './Infinite.css';

export class InfiniteRooms extends React.Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        document.getElementById('scroll').addEventListener('scroll', this.onScroll, { passive: true });
    }

    componentDidUpdate() {
        this.onScroll();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        const page = document.getElementById('scroll');
        if (!this.container || this.state.loading) {
            return;
        }
        const { scrollTop } = page;
        const containerHeight = this.container.clientHeight;
        let visiblePat = page.clientHeight;
        visiblePat -= 40;
        if (scrollTop === containerHeight - visiblePat) {
            this.nextPage();
        }
    }

    async nextPage() {
        if (this.props.next) {
            this.setState({ loading: true });
            try {
                await this.props.fetchNext();
            } catch (err) {
                // console.error(err);
            } finally {
                this.setState({ loading: false });
            }
        }
    }

    render() {
        return (
            <div className="infinite" id="scroll">
                <div ref={(container) => { this.container = container; }}>
                    {this.props.children}
                    {this.state.loading && (
                        <div className="spinner">
                            <div className="rect1" />
                            <div className="rect2" />
                            <div className="rect3" />
                            <div className="rect4" />
                            <div className="rect5" />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
