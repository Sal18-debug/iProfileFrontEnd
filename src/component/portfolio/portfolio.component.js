import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeUserProjects, currentProjectView } from '../../redux/redux'
import { Link } from 'react-router-dom'
import "./portfolio.css"
import { Button } from '@material-ui/core'

const Portfolio = (props) => {
    const dispatch = useDispatch()

    const email = useSelector(state => state.email)
    const userProjects = useSelector(state => state.userProjects)

    // stores all projects by the current user in redux
    useEffect(() => {
        axios.get(`http://localhost:5000/user/email/${email}/projects`).then(
            res => {
                if (res.data.success) {
                    dispatch(storeUserProjects(res.data.projects))
                } else {
                    console.log('something went wrong with portfolio axios')
                    console.log(res.data)
                }
            }
        )
    }, [])

    const handleOnClick = (e, projectId) => {
        e.preventDefault()
        console.log('onclick id', projectId)
        dispatch(currentProjectView(projectId))
    }

    return <div>
        <h1>My achievements</h1>

        <h4 className="level"> Level 4</h4>
        <p className="p">Complete one more project to level up</p>

        <h4 className="influence">Influence</h4>
        <p className="p">You got over 100 followers</p>

        <h4 className="awards">Awards</h4>
        <p className="p">Best project 1998 - Magic track</p>

        <h1 className="projects">My Projects</h1>
        <div className="project-list">
            {
                userProjects.map((project, index) => <div key={index} className="project-card">
                    {/* <h6>id: {project._id}</h6> */}
                    <Button onClick={(e)=>handleOnClick(e, project._id)}>
                        <Link to={`/project`} className="project-title">{project.title}</Link>
                    </Button>
                    <p>{project.imageUrl}</p>
                    <p>{project.description}</p>
                </div>)
            }
        </div>
    </div>
}

export default Portfolio