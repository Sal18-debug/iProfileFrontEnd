import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentProjectView, storeAllProjects } from '../../redux/redux'
import "./home.css"

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

const Home = (props) => {
    const dispatch = useDispatch()
    const allProjects = useSelector(state => state.allProjects)

    useEffect(
        () => {
            axios.get('http://localhost:5000/project').then(res => {
                if (res.data.success) {
                    dispatch(storeAllProjects(res.data.projects))
                } else {
                    console.log('something went wrong with all projects axios')
                    console.log(res.data)
                }
            })
        }
        , [])

    const handleOnClick = (e, projectId) => {
        e.preventDefault()
        console.log('onclick id', projectId)
        dispatch(currentProjectView(projectId))
    }

    return <div>
        <div className="search-wrapper">
        <InputField
            fullWidth={true}
            label='Search user/project/category'
            name='search'
            required
            autoComplete='Search user/project/category'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style: { color: 'black' } }}
            // onChange={e => setProjectTitle(e.target.value)}
        />
        </div>
        <h1>Featured Projects</h1>
        <div className="project-list">
            <div className="proj1">hi</div>
            <div className="proj2"></div>
            <div className="proj3"></div>
            <div className="proj4"></div>

            {/* {
            allProjects.slice(0, 4).map((project, index) => <div key={index} className="project-card">
                <Button onClick={(e) => handleOnClick(e, project._id)}>
                    <Link to={`/project`} className="project-title">{project.title}</Link>
                </Button>
            </div>)

        } */}
        </div>

        <a href="#" className="see-more">See more</a>

        <h1>Browser By Category</h1>
        <div className="category-list">
            <div className="category-card category-title">Engineer</div>
            <div className="category-card category-title"><p>Business</p></div>
            <div className="category-card category-title"><p>Arts</p></div>
            <div className="category-card category-title"><p>Science</p></div>
        </div>
        <a href="#" className="see-more">See more</a>
    </div>
}

export default Home