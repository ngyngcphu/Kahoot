import React from 'react';
import { socket } from '../Global/Header';
import Preview from './Preview';
import Answer from './Answer';
import Result from './Result';

class PlayBlock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            pin: '',
            nickname: '',
            questionNumber: 1,
            totalNumberOfQuestion: '',
            answers: []
        };
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        const pin = query.get('pin');
        const nickname = query.get('nickname');
        this.setState({
            pin: pin,
            nickname: nickname
        });

        socket.on('RECEIVE_ANSWER_OPTIONS', data => {
            this.setState({
                questionNumber: data.questionNumber,
                totalNumberOfQuestion: data.totalNumberOfQuestion,
                answers: data.answers
            });
        })
    }

    render() {
        const { step, pin, nickname, questionNumber, totalNumberOfQuestion } = this.state;
        switch(step) {
            case 1:
                return (
                    <Preview
                        nextStep={this.nextStep}
                        pin={pin}
                        nickname={nickname}
                        questionNumber={questionNumber}
                        totalNumberOfQuestion={totalNumberOfQuestion}
                    />
                );
            case 2:
                return (
                    <Answer />
                );
            case 3:
                return (
                    <Result />
                );
            default:
        }
    }
}

export default PlayBlock;