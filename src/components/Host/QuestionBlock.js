import React from 'react';
import Pin from '../Global/Pin';

class QuestionBlock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            time: 20,
            playerAnswered: 0,
            intervalId: 0
        }
    }

    timer = () => {
        this.setState({
            time: this.state.time - 1
        });
        if (this.state.time === 0) {
            clearInterval(this.state.intervalId);
            this.props.nextStep();
        }
    }

    componentDidMount() {
        const intervalId = setInterval(this.timer, 1000);
        this.setState({
            intervalId: intervalId
        });
    }

    render() {
        const { pin, question, answers } = this.props;
        return (
            <div>
                <div>Question: {question}</div>
                <div>Time: {this.state.time}</div>
                <div>{ answers.a }</div>
                <div>{ answers.b }</div>
                <div>{ answers.c }</div>
                <div>{ answers.d }</div>
                <div>{ this.state.playerAnswered } players answered.</div>
                <Pin pin={pin} />
            </div>
        );
    }
}

export default QuestionBlock;