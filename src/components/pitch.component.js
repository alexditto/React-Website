import React from 'react'
import { Link } from 'react-router-dom'

const Pitch = ({user}) => {
    if(window.location.href.split("/").reverse()[0] !=="resume"){
        return (
            <div className="container">
                <h3 >
                    Hey, thank you, {user}, for checking out my website and registering your very own profile.
                    Please have fun and see how far into the dungeon you can decend. If you are here to see my
                    resume, please click <Link to="/resume">here.</Link> Thanks again and adventure on Hero. 
                </h3>
                <br />
                <br />
                <br />
            </div>
        )
    }
    return (
        <div className="container">
        </div>
    )
}

export default Pitch
