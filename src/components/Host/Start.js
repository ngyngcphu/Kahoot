import React from 'react';
import { socket } from '../Global/Header';

class Start extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            quizId: '',
            quizName: '',
            numberOfQuestions: 0
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        const quizId = query.get('quizId');
        const pin = query.get('pin');
        console.log(pin);
        this.setState({
            pin: pin,
            quizId: quizId
        });

        socket.emit('FETCH_INTRO', pin);

        socket.on('GAME_INTRO', data => {
            console.log(data);
            const { quizName, numberOfQuestions } = data;
            this.setState({
                quizName: quizName,
                numberOfQuestions: numberOfQuestions
            });
            setTimeout(() => {
                this.props.history.push(`/question?quizId=${this.state.quizId}&pin=${this.state.pin}`);
            }, 5000);
        });

        setTimeout(() => {
            window.location.href = `/question?quizId=${this.state.quizId}&pin=${this.state.pin}`;
        }, 5000);
    }

    render() {
        return (
            <div>
                <h1>{ this.state.quizName }</h1>
                <p>{ this.state.numberOfQuestions } Questions</p>
                <p>Are you ready ?</p>
                <p>Pin: { this.state.pin }</p>
            </div>
        );
    }
}

export default Start;