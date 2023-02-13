import React from 'react';

class QuestionBlockIntro extends React.PureComponent {
    componentDidMount() {
        setTimeout(this.props.nextStep, 5000);
    }

    render() {
        const { questionNumber, question, totalNumberOfQuestions } = this.props;
        return (
            <div>
                <div>{questionNumber} of {totalNumberOfQuestions}</div>
                <div>Question: {question}</div>
            </div>
        );
    }
}

export default QuestionBlockIntro;