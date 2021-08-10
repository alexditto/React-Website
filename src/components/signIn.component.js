import React from 'react'

import { Button } from 'reactstrap';
const SignIn = ({name, onClickSignIn}) => {
    return (
        <div>
            <Button onClick= {onClickSignIn}>{name}</Button>
        </div>
    )
}

export default SignIn
