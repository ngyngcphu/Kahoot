import React from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

class Lobby extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            quizId: ''
        };
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        const quizId = parsed.quizId;
        this.setState({
            quizId: quizId
        });
        const socket = io('http://localhost:3000');
        socket.on('connect', () => {
            socket.emit('hostJoin', quizId);
        });
    }

    render() {
        return(
            <div>
                Lobby coming soon.
            </div>
        )
    }
}

export default Lobby;