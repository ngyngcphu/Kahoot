import React from 'react';
import Pin from '../Global/Pin';
import queryString from 'query-string';
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
        const parsed = queryString.parse(window.location.search);
        const quizId = parsed.quizId;
        console.log(quizId);
        this.setState({
            quizId: quizId
        });
        socket.on('connect', () => {
            socket.emit('hostJoin', quizId);
        });
        socket.on('showPin', data => {
            this.setState({
                pin: data.pin
            });
        })
        socket.on('updatePlayersInLobby', players => {
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