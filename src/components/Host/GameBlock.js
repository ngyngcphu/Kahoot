import React from 'react';
import { socket } from '../Global/Header';
import QuestionBlockIntro from './QuestionBlockIntro';
import QuestionBlock from './QuestionBlock';
import ResultBlock from './ResultBlock';
import ScoreBoard from './ScoreBoard';

class GameBlock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            pin: null,
            quizId: null,
            questionNumber: 1,
            totalNumberOfQuestions: null,
            question: null,
            answers: [],
            answeredA: 0,
            answeredB: 0,
            answeredC: 0,
            answeredD: 0,
            correct: null,
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
        const quizId = query.get('quizId');
        console.log('Question for room with pin', pin);
        this.setState({
            pin: pin,
            quizId: quizId
        })

        socket.emit('FETCH_QUESTION', pin);

        socket.on('RECEIVE_QUESTION', data => {
            const { questionNumber, question, totalNumberOfQuestions } = data;
            console.log(data);
            this.setState({
                questionNumber: questionNumber,
                question: question.question,
                answers: question.answers,
                correct: question.correct,
                totalNumberOfQuestions: totalNumberOfQuestions
            });
        })
    }

    render() {
        const { step, questionNumber, question, totalNumberOfQuestions, pin, answers } = this.state;
        switch(step) {
            case 1:
                return (
                    <QuestionBlockIntro 
                        nextStep={this.nextStep}
                        questionNumber={questionNumber}
                        question={question}
                        totalNumberOfQuestions={totalNumberOfQuestions}
                    />
                );
            case 2:
                return (
                    <QuestionBlock 
                        nextStep={this.nextStep}
                        pin={pin}
                        question={question}
                        answers={answers}
                    />
                );
            case 3:
                return (
                    <ResultBlock />
                )
            case 4:
                return (
                    <ScoreBoard />
                )
            default:
        }
    }
}

export default GameBlock;