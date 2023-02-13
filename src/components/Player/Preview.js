import React from 'react';
import Pin from '../Global/Pin';

class Preview extends React.PureComponent {
    componentDidMount() {
        setTimeout(() => this.props.nextStep(), 5000);
    }

    render() {
        const { pin, questionNumber, totalNumberOfQuestions } = this.props;
        return (
            <div>
                <Pin pin={pin} />
                <p>{questionNumber} of {totalNumberOfQuestions}</p>
                <h2>Question {questionNumber}</h2>
            </div>
        );
    }
}

export default Preview;