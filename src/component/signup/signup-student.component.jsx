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

     

const SignupStudent = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("a");
    const [password, setPassword] = React.useState("");


    const onSubmit = () => {
            console.log('onsub clicked')
            const body = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
                student: true
            }
            axios.post('http://localhost:5000/user/register', body).then(
                res => {
                    console.log(res);
                }
            )
    }  
    return(
    <div className={classes.mainform}>
        <form className={classes.form} >
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
            onChange={e=>setFirstName(e.target.value)}
            value={firstName}
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
            onChange={e=>setLastName(e.target.value)}
            value={lastName}
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
            onChange={e=>{setEmail(e.target.value); console.log(email)}}
            value={email}
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
            onChange={e=>setPassword(e.target.value)}
            value={password}
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
            value={password}/>
            <div className={classes.button}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
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