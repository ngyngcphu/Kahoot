import React from 'react';
import { socket } from '../Global/Header';
import Pin from '../Global/Pin';

class Instructions extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            pin: ''
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        this.setState({
            nickname: query.get('nickname'),
            pin: query.get('pin')
        });

        socket.on('GAME_HAS_STARTED', () => {
            window.history.pushState(
                {
                    nickname: this.state.nickname,
                    pin: this.state.pin
                },
                '',
                '/getready'
            )
        })
    }

    render() {
        return (
            <div>
                <Pin pin={this.state.pin} />
                <p>You are in</p>
                <p>See your nickname on screen</p>
            </div>
        );
    }
}

export default Instructions;