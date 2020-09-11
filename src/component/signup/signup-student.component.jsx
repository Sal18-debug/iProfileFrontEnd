import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';

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

const SignupStudent = () => {
    const classes = useStyles();
    return(
    <div className={classes.mainform}>
        <form className={classes.form}>
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='First name'
            name='firstName'
            required
            autoComplete='First name'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            />
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Last name'
            name='lastName'
            required
            autoComplete='Last name'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            />
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
            />
            <InputField 
            className={classes.input}
            fullWidth={true}
            label='Confirm password'
            name='confirmpassword'
            required
            autoComplete='Confirm password'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style:{color: 'black'}  }}
            />
            <div className={classes.button}>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </form>
        <div className={classes.newaccount}>
            <Link to='/' variant="body2" >
                {"Have an account? Login"}
            </Link>
        </div>
    </div>
    )
};
export default SignupStudent;