import React from 'react';
import { Grid, TextField, InputLabel, FormControl, Select, MenuItem, Button } from '@mui/material';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answers: {
                a: '',
                b: '',
                c: '',
                d: ''
            },
            correct: ''
        };
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleAnswerChange = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            answers: {
                ...prevState.answers,
                [name]: value
            }
        }));
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.saveQuestion(this.state);
        this.setState({
            question: '',
            answers: {
                a: '',
                b: '',
                c: '',
                d: ''
            },
            correct: ''
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField label='Question:' name='question' variant='filled' margin='dense'
                    value={this.state.question} onChange={this.handleChange} fullWidth required />
                <TextField label='Answer A:' name='a' variant='filled' margin='dense'
                    value={this.state.answers.a} onChange={this.handleAnswerChange} fullWidth required />
                <TextField label='Answer B:' name='b' variant='filled' margin='dense'
                    value={this.state.answers.b} onChange={this.handleAnswerChange} fullWidth required />
                <TextField label='Answer C:' name='c' variant='filled' margin='dense'
                    value={this.state.answers.c} onChange={this.handleAnswerChange} fullWidth required />
                <TextField label='Answer D:' name='d' variant='filled' margin='dense'
                    value={this.state.answers.d} onChange={this.handleAnswerChange} fullWidth required />
                <FormControl margin='dense' variant='filled' fullWidth>
                    <InputLabel>Correct Answer:</InputLabel>
                    <Select
                        name='correct'
                        value={this.state.correct}
                        onChange={this.handleChange}
                    >
                        <MenuItem value='a'>A</MenuItem>
                        <MenuItem value='b'>B</MenuItem>
                        <MenuItem value='c'>C</MenuItem>
                        <MenuItem value='d'>D</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' color='primary' type='submit'>Add Question</Button>
            </form>
        );
    }
}

const Questions = (props) => {
    if (props.questions.length === 0) {
        return (<div>No questions have been added.</div>);
    }
    const quizQuestions = props.questions.map(() => (
        <div>

        </div>
    ));
    return (
        <div>
            { quizQuestions }
        </div>
    );
}

class QuestionsForm extends React.Component {
    render() {
        const { saveQuestion, nextStep, prevStep, values } = this.props;
        return (
            <Grid
                container
                direction='column'
                alignItems='center'
            >
                <Grid item>
                    <h1>Add Questions</h1>
                </Grid>
                <Grid item>
                    <QuestionForm saveQuestion={ saveQuestion }/>
                </Grid>
                <div className='controls'>
                    <Button variant='contained' color='secondary' onClick={prevStep}>
                        Back
                    </Button>
                    <Button variant='contained' color='primary' onClick={nextStep}>
                        Next
                    </Button>
                </div>
                <Grid item>
                    <h2>List of current questions:</h2>
                    <Questions questions={ values.questions }/>
                </Grid>
            </Grid>
        );
    }
}

export default QuestionsForm