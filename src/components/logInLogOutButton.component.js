import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import {
    Button
} from 'reactstrap'

const LogInLogOutButton = ({user, setUser}) => {
    const history = useHistory();

    const logOut = () => {
        localStorage.clear();
        setUser("");
        let path = "/home"
        history.push(path)
    }

    if(user){
        return (
            <>
                <Button onClick={logOut}>
                    Log Out
                </Button>
            </>
        )
    } else {
        return (
            <Link to='/home'>
                <Button>
                    Log In
                </Button>
            </Link>
        )
    }
    
}

export default LogInLogOutButton
