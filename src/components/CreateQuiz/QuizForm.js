import React from 'react';
import axios from 'axios';
import QuizDetailsForm from './QuizDetailsForm';
import QuestionsForm from './QuestionsForm';
import Confirm from './Confirm';

let URL = (model) => {
    return `http://localhost:3000/${model}/`
}

class QuizForm extends React.PureComponent {
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

    saveQuiz = async () => {
        const { name, category, questions } = this.state;
        const postRequest = {
            name: name,
            category: category,
            questions: questions
        }
        console.log(postRequest);
        let res = await axios.post(URL('quizzes', postRequest));
        const quizId = res.data._id;
        console.log(quizId);
        this.props.history.push(`/quizzes/${quizId}`);
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
                        values={values}
                        saveQuestion={this.saveQuestion}
                    />
                );
            case 3:
                return (
                    <Confirm
                        prevStep={this.prevStep}
                        values={values}
                        saveQuiz={this.saveQuiz}
                    />
                );
            case 4:
                
        }
    }
}

export default QuizForm;