import React from 'react'
import { Link } from 'react-router-dom'

import {
    Button
} from 'reactstrap'

const LogInLogOutButton = ({user, setUser}) => {
    const logOut = () => {
        localStorage.clear();
        setUser("");
        console.log(user);
        window.location.replace('/home');
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
