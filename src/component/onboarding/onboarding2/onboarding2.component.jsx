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
    parent: {
        width: '100%',
        height: '80vh'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '4rem',
        marginBottom: '30px'
    },
    name: {
        paddingBottom: '30px',
        fontSize: '24px'
    },
    box: {

    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '40px'
    },
    day: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%'
    },
    category: {
        // width: '60%'
    },
    text: {

    },
    extra: {

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
            title: projectTitle,
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

    return (
        <div className={classes.parent}>
            <form className={classes.form}>
                <div className={classes.name}>
                    Add Projects
                </div>
                <div className={classes.box}>
                    <div className={classes.info}>
                        <div className={classes.left}>
                            <InputField
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
                        </div>
                        <div className={classes.right}>
                            <div className={classes.category}>
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
                            </div>
                            <div className={classes.day}>
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
                            </div>
                        </div>
                    </div>
                    <div className={classes.text}>
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
                    type='string'
                    inputProps={{ style: { color: 'black', height: '90px' } }}
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>
                </div>
            </form>
            <div className={classes.extra}>
                <Button variant="contained" color="primary" onClick={handleOnSubmit}>
                    Add another project
                </Button>
                <Button variant="contained" color="secondary" onClick={handleOnSubmit}>
                    Finish
                </Button>

            </div>
        </div>
    )
};

export default Onboarding2