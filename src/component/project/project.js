import React, { useEffect, dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { currentProjectView, storeCurrentProject } from '../../redux/redux'
import {Link } from 'react-router-dom'


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

    return <div>
        <h1 className="project-title">{currentProject.title}</h1>
        <h3>By {currentProject.contributors}</h3>
        <p>{currentProject.startDate} - {currentProject.endDate}</p>
        <p>{currentProject.description}</p>
    </div>
}

export default Project