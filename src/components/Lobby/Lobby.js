import React from 'react';
import Pin from '../Global/Pin';
import { socket } from '../Global/Header';
import { Button } from '@mui/material';
class Lobby extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            quizId: '',
            pin: null,
            players: []
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        const quizId = query.get('quizId');
        console.log(quizId);
        this.setState({
            quizId: quizId
        });
        socket.emit('HOST_JOINED', quizId);
        socket.on('SHOW_PIN', data => {
            this.setState({
                pin: data.pin
            });
        })
        socket.on('UPDATE_PLAYERS_IN_LOBBY', players => {
            this.setState({
                players: players
            });
        })
    }

    startGame = () => {
        socket.emit('startGame');
    }

    render() {
        return (
            <div>
                <Pin pin={this.state.pin} />
                <Players players={this.state.players} />
                <Button variant='contained' color='primary' onClick={this.startGame}>
                    Start
                </Button>
            </div>
        );
    }
}

const Players = props => {
    if (props.players.length === 0) {
        return (<div>Awaiting players</div>);
    }
    const playerNames = props.players.map(p => (
        <li key={p._id}>
            <p>{p.nickname}</p>
        </li>
    ))
    return (
        <ul>
            { playerNames }
        </ul>
    )
}

export default Lobby;