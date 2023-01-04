import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';

let URL = (model, id = '') => {
    return `http://localhost:3000/${model}/${id}`;
}

class QuizForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            questions: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
        this.saveQuiz = this.saveQuiz.bind(this);
        //this.addQuestion = this.addQuestion.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    saveQuestion(content) {
        this.setState({ questions: [...this.state.questions, content] });
    }

    saveQuiz(content) {
        axios.post(URL('quizDB'), this.state);
    }

    // addQuestion() {
    //     return (
    //         <QuestionForm />
    //     );
    // }

    render() {
        return (
            <div>
                <form>
                    <input type='text' name='name' placeholder='Name' value={this.state.name}
                        onChange={this.handleChange} required />
                    <input type='text' name='categorary' placeholder='Category' value={this.state.category}
                        onChange={this.handleChange} required />
                </form>
                {/* <QuestionForm onSubmit={this.saveQuestion} /> */}
                <button onClick={() => this.addQuestion()}>Add Question</button>
            </div>
        );
    }
}

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            answers: [
                {
                    body: ''
                },
                {
                    body: ''
                },
                {
                    body: ''
                },
                {
                    body: ''
                }
            ],
            correct: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            answers: [
                {
                    body: ''
                },
                {
                    body: ''
                },
                {
                    body: ''
                },
                {
                    body: ''
                }
            ],
            correct: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='body' value={this.state.body} onChange={this.handleChange}
                    placeholder='Question' />
                <label>Answer 1:</label>
                <input type='text' name='answer' value={this.state.answers[0].body} required />
                <label>Answer 2:</label>
                <input type='text' name='answer' value={this.state.answer[1].body} required />
                <label>Answer 3:</label>
                <input type='text' name='answer' value={this.state.answer[2].body} required />
                <label>Answer 4:</label>
                <input type='text' name='answer' value={this.state.answer[3].body} required />
                <input type='submit' />
            </form>
        )
    }
}

export default QuizForm;