import React, { useEffect, dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { currentProjectView, storeCurrentProject } from '../../redux/redux'
import { Link } from 'react-router-dom'
import "./project.css"

const Project = props => {
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

    return <div className="project">

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
    </div>
}

export default Project