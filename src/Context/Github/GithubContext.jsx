import {createContext, useReducer} from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({children}) => {
    const initial_state = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initial_state)

    // Get Search Users
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {})

        const data = await response.json()

        console.log(data)


        dispatch({
            type: 'GET_USERS',
            payload: data.items,
        })
    }

    // Get single user
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        })

        if(response.status === 404){
            window.location = '/notfound'
        } else{
            const data = await response.json()
            dispatch({
                type: 'GET_USER',
                payload: data,
            })

        }


    }

    const clearItems = () => dispatch({
        type: 'CLEAR_USERS'
    })

    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value = {{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearItems,
        getUser
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext
