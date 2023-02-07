import React from 'react';
import { socket } from '../Global/Header';
import { TextField, Button } from '@mui/material';

class JoinGame extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            pin: '',
            statuss: null
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('Enter button');
        const { nickname, pin } = this.state;
        socket.emit('PLAYER_JOINED', {
            nickname: nickname,
            pin: pin
        });
        socket.on('GAME_NOT_FOUND', () => {
            console.log('Game not found');
            this.setState({
                status: false
            });
        })
    }

    render() {
        let message;
        if (this.state.status === false)
        {
            message = <div>Game not found</div>;
        } else {
            message = <div></div>;
        }

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField label='Nickname' name='nickname' value={this.state.nickname} 
                        onChange={this.handleChange} margin='dense' variant='filled' required />
                    <TextField label='GamePin' name='pin' value={this.state.pin} onChange={this.handleChange}
                        margin='dense' variant='filled' required />
                    <Button variant='contained' color='primary' type='submit'>
                        Enter
                    </Button>
                </form>
                {message}
            </div>
        )
    }
}

export default JoinGame;