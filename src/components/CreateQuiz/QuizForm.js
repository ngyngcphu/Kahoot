import React from 'react';
//import axios from 'axios';
import QuizDetailsForm from './QuizDetailsForm';
import QuestionsForm from './QuestionsForm';

class QuizForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: '',
            category: '',
            questions: []
        };
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    saveQuestion = content => {
        this.setState({
            questions: [...this.state.questions, content]
        });
    }

    render() {
        const { step, name, category, questions } = this.props;
        const values = { name, category, questions };
        switch (step) {
            case 1:
                return (
                    <QuizDetailsForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <QuestionsForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        saveQuestion={this.saveQuestion}
                    />
                );
            case 3:
                return <h1>Confirm</h1>;
            case 4:
                return <h1>Success</h1>;
            default:
        }
    }
}

export default QuizForm