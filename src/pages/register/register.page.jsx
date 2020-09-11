import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignupStudent from '../../component/signup/signup-student.component';

const useStyles = makeStyles((theme) => ({ 
    parent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100vh'
    },
    mainform: {
        display: 'flex',
        flexDirection:'column'
    },
    option: {
        display: 'flex',
        flexDirection: 'row'
    }
}));
const Register = () => {
    const classes = useStyles();
    return (
        <div className={classes.parent}>
            <div className={classes.mainform}>
                <div className={classes.option}>

                </div>
                <Paper square>
                    <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    >
                        <Tab label="Student" />
                        <Tab label="Recruiter" />
                    </Tabs>
                </Paper>

                <div className={classes.signup}>
                    <SignupStudent/>
                </div>

            </div>
        </div>
    )
};
export default Register;