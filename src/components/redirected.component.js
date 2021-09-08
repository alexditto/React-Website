import React from 'react'
import RegisterInput from './registerInput.component';

import { 
    Container,
} from 'reactstrap';

const Redirected = ({setUser}) => {
    return (
        <Container>
            <h2 className="m-4">Want to Play? Please register an account. Feel free to use fake information. I am just showing off that I can make a log in page. You know how it is.</h2>
            <RegisterInput setUser={setUser}/>
        </Container>
    )
}

export default Redirected
