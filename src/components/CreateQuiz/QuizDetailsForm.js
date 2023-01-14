import React from 'react';
import { TextField, Button } from '@mui/material';
class QuizDetailsForm extends React.Component {
    render() {
        const { handleChange, values, nextStep } = this.props;
        return (
            <div>
                <h1>Enter information about quiz:</h1>
                <form>
                    <TextField
                        name='name'
                        label='Name'
                        onChange={handleChange}
                        value={values.name}
                        required />
                    <br />
                    <TextField 
                        name='category'
                        label='Category'
                        onChange={handleChange}
                        value={values.category}
                        required />
                    <br />
                    <Button variant='contained' color='primary' type='submit' onClick={nextStep}>
                        Next
                    </Button>
                </form>
            </div>
        );
    }
}

export default QuizDetailsForm