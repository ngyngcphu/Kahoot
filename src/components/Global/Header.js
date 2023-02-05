import React from 'react';
import io from 'socket.io-client';

let socket;

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: 'http://localhost:3000'
        };
        socket = io(this.state.endpoint);   
    }

    render() {
        return null;
    }
}

export { Header, socket };