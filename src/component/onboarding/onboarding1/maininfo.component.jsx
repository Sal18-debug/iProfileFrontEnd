import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
import { storeEmail, storeUserProfile } from '../../redux/redux';
import { useDispatch } from 'react-redux';

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
const MainInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    /* this is used for Gender selection*/
    const [gender, setGender] = React.useState("Male");
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return(
        <div className={classes.mainform}>
            <form className={classes.form}>
                <div className={classes.left}>
                    <InputField 
                    fullWidth={true}
                    label='First name'
                    name='firstname'
                    required
                    autoComplete='firstname'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    inputProps={{ style:{color: 'black'}  }}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <InputField 
                    fullWidth={true}
                    label='Date of birth'
                    name='dateOfBirth'
                    required
                    autoComplete='dateOfBirth'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    inputProps={{ style:{color: 'black'}  }}
                    onChange={e=>setPass(e.target.value)}
                    />
                    <InputField 
                    fullWidth={true}
                    label='University'
                    name='univesity'
                    required
                    autoComplete='univesity'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    inputProps={{ style:{color: 'black'}  }}
                    onChange={e=>setPass(e.target.value)}
                    />
                    <InputField 
                    fullWidth={true}
                    label='Degree'
                    name='degree'
                    required
                    autoComplete='degree'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    inputProps={{ style:{color: 'black'}  }}
                    onChange={e=>setPass(e.target.value)}
                    />
                </div>
                
                <div className={classes.right}>
                    <InputField 
                    fullWidth={true}
                    label='Last name'
                    name='lastName'
                    required
                    autoComplete='lastName'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    inputProps={{ style:{color: 'black'}  }}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <div className={classes.gender}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
                            <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={gender}
                            onChange={handleChange}
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                    <InputField 
                    fullWidth={true}
                    label='Graduation date'
                    name='graduationDate'
                    required
                    autoComplete='graduationDate'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    inputProps={{ style:{color: 'black'}  }}
                    onChange={e=>setPass(e.target.value)}
                    />
                    <InputField 
                    fullWidth={true}
                    label='Major'
                    name='major'
                    required
                    autoComplete='major'
                    variant='outlined'
                    margin='dense'
                    size='medium'
                    inputProps={{ style:{color: 'black'}  }}
                    onChange={e=>setPass(e.target.value)}
                    />
                </div>

                <div className={classes.photo}>
                
                </div>
            </form>
        </div>
    )
};
export default MainInfo;