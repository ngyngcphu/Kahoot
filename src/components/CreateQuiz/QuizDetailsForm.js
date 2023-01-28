import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
class QuizDetailsForm extends React.Component {
    render() {
        const { handleChange, values, nextStep } = this.props;
        return (
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
                        value={values/*.name*/}
                        fullWidth
                        required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        name='category'
                        label='Category'
                        onChange={handleChange}
                        value={values/*.category*/}
                        fullWidth
                        required />
                </Grid>
                <Grid item>
                    <Button variant='contained' color='primary' type='submit' onClick={nextStep}>
                        Next
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default QuizDetailsForm