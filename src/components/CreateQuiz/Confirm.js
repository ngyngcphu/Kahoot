import React from 'react';
import { Grid, Button } from '@mui/material'

const QuizDetails = props => {
    return (
        <div>
            <p><span style={{fontWeight: 'bold'}}>Name: </span>{props.name}</p>
            <p><span style={{fontWeight: 'bold'}}>Category: </span>{props.category}</p>
        </div>
    );
}

const QuestionList = props => {
    const quizQuestions = props.questions.map((q, i) => (
        <div key={i}>
            <div style={{fontWeight: 'bold'}}>Question {i + 1}</div>
            <p>{q.question} Answer: {q.answers[q.correct]}</p>
        </div>
    ));
    return (
        <div>
            { quizQuestions }
        </div>
    )
}

class Confirm extends React.PureComponent {
    render() {
        const { saveQuiz, prevStep, values } = this.props;
        return (
            <Grid
                container
                direction='column'
                alignItems='center'
            >
                <Grid item>
                    <h1>Confirm quiz:</h1>
                </Grid>
                <Grid item>
                    <QuizDetails name={values.name} category={values.category} />
                    <QuestionList questions={values.questions} />
                </Grid>
                <Grid item>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item md={6} xs={12}>
                            <Button variant='contained' color='secondary' onClick={prevStep} fullWidth>
                                Back
                            </Button>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Button variant='contained' color='primary' onClick={saveQuiz} fullWidth>
                                Confirm
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}
export default Confirm;