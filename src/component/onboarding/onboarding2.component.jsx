import { Grid, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

const Onboarding2 = (props) => {
    const classes = useStyles();

    const [email, setEmail] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [dateOfBirth, setDateOfBirth] = React.useState("")
    const [university, setUniversity] = React.useState("")
    const [graduation, setGraduation] = React.useState("")
    const [imageUrl, setImageUrl] = React.useState("")
    const [degree, setDegree] = React.useState("")
    const [major, setMajor] = React.useState("")
    const [profileAvaliableToRecruiter, setProfileAvaliableToRecruiter] = React.useState(false)
    const [recieveMessageFromRecruiters, setRecieveMessageFromRecruiters] = React.useState(false)

    //NOTE: REMEMBER TO REPLACE EMAIL!!!!!!!!!!!!!
    const handleOnSubmit = (e) => {
        e.preventDefault()

        const body = {
            lastName: lastName, 
            firstName: firstName, 
            dateOfBirth: dateOfBirth, 
            university: university,
            graduation: graduation, 
            // imageUrl: imageUrl, 
            degree: degree, 
            major: major, 
            profileAvaliableToRecruiter: profileAvaliableToRecruiter,
            recieveMessageFromRecruiters: recieveMessageFromRecruiters
    }

        axios.post(`http://localhost:5000/user/email/a/profile`, body).then(
            (res) => {
                console.log(res)
            }
        )
    }

    return <div>

        <Grid>
            <form>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='First Name'
                        name='firstName'
                        required
                        autoComplete='Harry'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>
                    <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Last Name'
                        name='lastName'
                        required
                        autoComplete='Potter'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Date of birth'
                        name='dateOfBirth'
                        required
                        autoComplete='Date of Birth'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setDateOfBirth(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='MALE FEMALE PLACEHOLDER'
                        name='email'
                        required
                        autoComplete='email'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='University'
                        name='university'
                        required
                        autoComplete='university'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setUniversity(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Graduation date'
                        name='graduationDate'
                        required
                        autoComplete='Graduation date'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setGraduation(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Degree'
                        name='degree'
                        required
                        autoComplete='Degree'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setDegree(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Major'
                        name='major'
                        required
                        autoComplete='Major'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setMajor(e.target.value)}
                    />
                </Grid>

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={profileAvaliableToRecruiter}
                    />}
                    label="Primary"
                ></FormControlLabel>
                
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={recieveMessageFromRecruiters}
                    />}
                    label="Primary"
                ></FormControlLabel>
                

                <div className={classes.button}>
                    <Button variant="contained" color="primary" onClick={handleOnSubmit}>
                        Next
                </Button>
                </div>
            </form>
        </Grid>

    </div>
}

export default Onboarding2