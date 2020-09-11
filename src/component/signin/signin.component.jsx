import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato'
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '& .Mui-focused fieldset': {
                borderColor: 'tan'
            }
        }
    },
})(TextField);

const useStyles = makeStyles((theme) => ({ 
    form: {
        display: 'column'
    },
    button: {
        marginTop: '10px'
    },
    newaccount: {
        marginTop: '10px'
    }
}));


// http://localhost:5000/user/login
const Signin = () => {
    const classes = useStyles();

    const [email, setEmail] = React.useState();
    const [password, setPass] = React.useState();


    const onChangeEmail = (e) => {
        setEmail(e.target.email);
    }
    const onChangePass = (e) => {
        setPass(e.target.password);
    }

    const onSubmit = () => {
        const body = {
            email: email,
            password: password
        }
        axios.get('http://localhost:5000/user/login', body).then(
            res => {
                console.log(res);
            }
        )
    }  

    return(
    <div className={classes.mainform}>
        <form className={classes.form}>
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Email'
            name='email'
            required
            autoComplete='email'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            onChange={onChangeEmail}
            />
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Password'
            name='password'
            required
            autoComplete='current-password'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            onChange={onChangePass}
            />
            <div className={classes.button}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </form>
        <div className={classes.newaccount}>
            <Link to='/register' variant="body2" >
                {"Don't have an account? Register"}
            </Link>
        </div>
    </div>
    )
};
export default Signin;