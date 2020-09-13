import React, { useEffect, dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { currentProjectView, storeCurrentProject } from '../../redux/redux';
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom';
import "./project.css"


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
    main: {
        width: '100%',
        height: '80vh'
    }
}));


const Project = props => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const projectId = useSelector(state => state.projectId)
    const currentProject = useSelector(state => state.currentProject)

    useEffect(() => {
        axios.get(`http://localhost:5000/project/projectId/${projectId}`).then(
            res => {
                if (res.data.success) {
                    console.log('htr', res.data.project)
                    dispatch(storeCurrentProject(res.data.project))
                } else {
                    console.log('something went wrong with project axios')
                    console.log(res.data)
                }
            }
        )
    }, [])

    return (
        <div className="project">
            <div className={classes.main}>
                <div className="title-name">
                    <h1 className="project-title">{currentProject.title}</h1>
                    <h3>By {currentProject.contributors}</h3>
                </div>

                <div className="history-start-end">
                    <a href="#">#History</a>
                    <div>
                        Jul 2020 - Aug 2020
                        {/* <p>{currentProject.startDate} - {currentProject.endDate}</p> */}
                    </div>
                </div>

                <div className="description">
                    <p className="desc-p">{currentProject.description}</p>
                </div>

                <h1>Comments</h1>
                <div className="comment-div">
                    <InputField
                        fullWidth={true}
                        label='Add a comment'
                        name='commentField'
                        required
                        autoComplete='Add a comment'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'black' } }}
                    // onChange={e => setProjectTitle(e.target.value)}
                    />
                    <button className="post-comment">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Project