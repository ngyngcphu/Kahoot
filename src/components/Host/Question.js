import React from 'react';
import { socket } from '../Global/Header';

class Question extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            quizId: '',
            question: '',
            questionNumber: 0,
            totalNumberOfQuestions: 0
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        const quizId = query.get('quizId');
        const pin = query.get('pin');
        this.setState({
            pin: pin,
            quizId: quizId
        });

        socket.emit('FETCH_QUESTION', pin);

        socket.on('RECEIVE_QUESTION', data => {
            const { question, questionNumber, totalNumberOfQuestions } = data;
            this.setState({
                question: question,
                questionNumber: questionNumber,
                totalNumberOfQuestions: totalNumberOfQuestions
            });
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.questionNumber} of {this.state.totalNumberOfQuestions}</div>
                <div>Question: {this.state.question}</div>
            </div>
        );
    }
}

export default Question;