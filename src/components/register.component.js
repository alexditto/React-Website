import React from 'react'

import { 
    Button,
} from 'reactstrap';

const Register = ({name, onClickRegister}) => {
    return (
        <div>
            <Button onClick= {onClickRegister}>{name}</Button>
        </div>
        )
    }

export default Register
