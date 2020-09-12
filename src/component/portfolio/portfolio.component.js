import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeUserProjects } from '../../redux/redux'

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

    return <div>
        <h1>My achievements</h1>

        <h4>Level 4</h4>
        <p>Complete one more project to level up</p>

        <h4>Influence</h4>
        <p>You got over 100 followers</p>

        <h4>Awards</h4>
        <p>Best project 1998 - Magic track</p>

        <h1>My Projects</h1>
        <div>
            {
                userProjects.map((project, index) => <div key={index}>
                    {/* <h6>id: {project._id}</h6> */}
                    <p>{project.title}</p>
                    <p>{project.imageUrl}</p>
                    <p>{project.description}</p>
                </div>)
            }
        </div>
    </div>
}

export default Portfolio