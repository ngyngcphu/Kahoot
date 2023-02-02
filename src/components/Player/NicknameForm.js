import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button } from '@mui/material';

class NicknameForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nickname: ''
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
                >
                    <Grid item>
                        <TextField margin='dense' name='nickname' value={this.state.nickname}
                            onChange={this.handleChange} variant='outlined'
                            placeholder='NICKNAME' />
                    </Grid>
                    <Grid item>
                        <Button variant='contained' color='primary' type='submit'>
                            Enter
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to='/login'>Login</Link>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default NicknameForm;