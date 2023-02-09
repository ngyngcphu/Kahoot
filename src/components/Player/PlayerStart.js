import React from 'react';
import { socket } from '../Global/Header';

class PlayerStart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            pin: ''
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        this.setState({
            nickname: query.get('nickname'),
            pin: query.get('pin')
        });

        socket.on('READY', () => {
            console.log('Player ready');
            setTimeout(() => {
                window.history.pushState(
                    {
                        pin: this.state.pin,
                        nickname: this.state.nickname
                    },
                    '',
                    '/getready'
                )
            }, 5000)
        })
    }

    render() {
        return (
            <div>
                <h1>Get Reacdy</h1>
                <p>Loading...</p>
            </div>
        );
    }
}

export default PlayerStart;