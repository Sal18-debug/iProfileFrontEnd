import React, {useEffect, dispatch} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {currentProjectView, storeCurrentProject} from '../../redux/redux'

const Project = props => {
    const dispatch = useDispatch()
    const projectId = useSelector(state=>state.projectId)
    console.log('in projec')
    useEffect(() => {
        axios.get(`http://localhost:5000/project/projectId/${projectId}`).then(
            res =>   {
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
        Project Page
    </div>
}

export default Project