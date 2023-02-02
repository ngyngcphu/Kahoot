import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button } from '@mui/material';

class JoinGameForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pin: ''
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid
                    container
                    spacing={2}
                    direction='column'
                    //alignItems='center'
                    //justifyItems='center'
                >
                    <Grid item>
                        <TextField margin='dense' name='pin' value={this.state.pin}
                            onChange={this.handleChange} variant='outlined' 
                            placeholder='Game PIN' />
                    </Grid>
                    <Grid item>
                        <Button variant='contained' color='primary' type='submit'>
                            Enter    
                        </Button> 
                    </Grid>
                    <Grid item>
                        <Link to='/login'>Login to create your own quizy</Link>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default JoinGameForm;