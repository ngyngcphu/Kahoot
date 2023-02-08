import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

class QuizDetailsForm extends React.PureComponent {
    next = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { handleChange, values } = this.props;
        return (
            <form onSubmit={this.next}>
                <Grid
                    container
                    spacing={2}
                    justifyContent='center'
                >
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <h1>Enter information about quiz</h1>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name='name'
                            label='Name'
                            onChange={handleChange}
                            value={values.name}
                            fullWidth
                            required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            name='category'
                            label='Category'
                            onChange={handleChange}
                            value={values.category}
                            fullWidth
                            required />
                    </Grid>
                    <Grid item>
                        <Button variant='contained' color='primary' type='submit' fullWidth>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default QuizDetailsForm;