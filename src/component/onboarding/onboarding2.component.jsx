import { Grid, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
    const {email, firstName, lastName, dateOfBirth, univesity, degree, major} = useSelector(state=>state)
    console.log(email, firstName, lastName,dateOfBirth, univesity, degree,major )

    const [projectTitle, setProjectTitle] = useState("")
    const [category, setCategory] = useState("")
    const [contributors, setContributors] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [description, setDescription] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const body = {
            projectTitle: projectTitle,
            category: category,
            contributors: contributors,
            startDate: startDate,
            endDate: endDate,
            description: description
        }

        axios.post(`http://localhost:5000/user/email/${email}/project`, body).then(
            (res) => {
                console.log(res)
            }
        )
    }

    return <div>

        <h1>Add My Projects</h1>

        <Grid>
            <form>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Project Title'
                        name='projectTitle'
                        required
                        autoComplete='Project Title'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setProjectTitle(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>
                    <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Category'
                        name='category'
                        required
                        autoComplete='Category'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setCategory(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Contributors'
                        name='contributors'
                        required
                        autoComplete='contributors'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setContributors(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Start Date'
                        name='startDate'
                        required
                        autoComplete='Start Date'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setStartDate(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='End Date'
                        name='endDate'
                        required
                        autoComplete='End Date'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setEndDate(e.target.value)}
                    />
                </Grid>
                <Grid sm={12} md={6}>˛
                <InputField
                        className={classes.input}
                        fullWidth={true}
                        label='Description'
                        name='description'
                        required
                        autoComplete='Description'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Grid>

                <div className={classes.button}>
                    <Button variant="contained" color="primary" onClick={handleOnSubmit}>
                        Finish
                </Button>
                </div>
            </form>
        </Grid>

    </div>
}

export default Onboarding2