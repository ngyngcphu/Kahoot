import React from 'react';
import { socket } from '../Global/Header';
import { TextField, Button } from '@mui/material';

class JoinGame extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            pin: ''
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
        socket.emit('playerJoin', this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField label='Nickname' name='nickname' value={this.state.nickname} 
                    onChange={this.handleChange} margin='dense' variant='filled' required />
                <TextField label='GamePin' name='pin' value={this.state.pin} onChange={this.handleChange}
                    margin='dense' variant='filled' required />
                <Button variant='contained' color='primary' type='submit'>
                    Enter
                </Button>
            </form>
        )
    }
}

export default JoinGame;