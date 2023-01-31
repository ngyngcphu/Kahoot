import React from 'react';
import QuizInfo from '../utils';
import { Grid } from '@mui/material';

const PreviewQuestions = props => {
    if (props.questions.length === 0) {
        return (
            <div>
                No questions.
            </div>
        );
    }
    const questions = props.questions.map((q, i) => (
        <div key={i}>
            <div style={{ fontWeight: 'bold' }}>Question {i + 1}</div>
            <p>{q.question}</p>
        </div>
    ));
    return (
        <div>
            {questions}
        </div>
    );
}

class Quiz extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            questions: []
        }
    }

    async componentDidMount() {
        console.log(this.props.match.params);
        const { quizId } = this.props.match.params;
        console.log(quizId);
        const data = await QuizInfo.getQuiz(quizId);
        const { name, category, questions } = data;
        console.log(name, category, questions);
        this.setState({
            name: name,
            category: category,
            questions: questions
        });
    }

    render() {
        return (
            <Grid
                container
            >
                <Grid item>
                    <h1>Quiz preview</h1>
                </Grid>
                <Grid item>
                    <h2>Quiz: {this.state.name}</h2>
                </Grid>
                <Grid item>
                    <h2>Category:{this.state.category}</h2>
                </Grid>
                <Grid item>
                    <PreviewQuestions questions={this.state.questions} />
                </Grid>
            </Grid>
        );
    }
}