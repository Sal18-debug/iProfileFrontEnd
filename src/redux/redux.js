import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


const STORE_EMAIL = 'STORE_EMAIL';
const STORE_USER_PROFILE = 'STORE_USER_PROFILE'
const STORE_USER_PROJECTS = 'STORE_USER_PROJECTS'
const CURRENT_PROJECT_VIEW = 'CURRENT_PROJECT_VIEW'
const STORE_CURRENT_PROJECT = 'STORE_CURRENT_PROJECT'

const initialState = {
    email: "d",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    university: "",
    graduationDate: "",
    degree: "",
    major: "",
    userProjects: [],
    projectId: "5f5d4063998705209f145e6a",
    currentProject: ""
}

export function storeEmail(email){
    console.log('store user action')
    return {
        type: STORE_EMAIL,
        payload: {
            email: email,
        }
    }
}

export function storeUserProfile(profile){
    return {
        type: STORE_USER_PROFILE,
        payload: {
            profile: profile
        }
    }
}

export function storeUserProjects(projects){
    return {
        type: STORE_USER_PROJECTS,
        payload: {
            projects: projects
        }
    }
}

// store current project id 
export function currentProjectView(id){
    return {
        type: CURRENT_PROJECT_VIEW,
        payload: {
            projectId: id
        }
    }
}

// store current project data using id
export function storeCurrentProject(currentProject){
    return {
        type: STORE_CURRENT_PROJECT,
        payload: {
            currentProject
        }
    }
}

function userReducer(state=initialState, action){
    console.log('reducer hit')
    const {payload} = action;
    switch(action.type){
        case STORE_EMAIL:
            console.log('case store email')
            return {
                ...state,
                email: payload.email,
            }
        case STORE_USER_PROFILE:
            const { firstName, lastName, dateOfBirth, university, graduationDate, degree, major } = payload.profile
            return {
                ...state,
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                university: university,
                graduationDate: graduationDate,
                degree: degree,
                major: major
            }
        case STORE_USER_PROJECTS:
            return {
                ...state,
                userProjects: payload.projects
            }

        case CURRENT_PROJECT_VIEW:
            console.log('red store id', payload.projectId)
            return {
                ...state,
                projectId: payload.projectId
            }

        case STORE_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: payload.currentProject
            }
        
        default:
            return state
    }
}

let store = createStore(userReducer, composeWithDevTools());

export default store;