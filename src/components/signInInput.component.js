import React from 'react';
import { useState } from 'react';

import { 
    Row,
    Input,
    Form,
    FormGroup,
    Label,
    Button
} from 'reactstrap';

const SignInInput = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!password){
            return alert("Hey, you need your password.")
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let data = JSON.stringify({
            "email" : email,
            "password" : password
        }); 

        let requestOptions = {
            method : 'POST',
            headers : myHeaders,
            body : data
        }

        fetch("http://localhost:5000/api/users/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                let parsed = JSON.parse(result)
                localStorage.setItem('jwt', `bearer ${parsed.token}`);
                localStorage.setItem('username', parsed.username)
                setUser(parsed.username)
                let time = new Date()
                time.setDate(time.getDate()+2)
                localStorage.setItem("timeout", time)
                window.location.replace('/characters')
            })
            .catch(error => console.log('error', error));
    } 

    return (
        <Form className="text-info" onSubmit={handleSubmit}>
            <Row className="mb-2">
                <FormGroup>
                    <Label>Email:</Label>
                    <Input 
                        value={email}
                        onChange= {e=> setEmail(e.target.value)}
                        placeholder="example@fakeemail.com" />
                </FormGroup>
            </Row>
            <Row className="mb-2">
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        value={password}
                        onChange= {e=> setPassword(e.target.value)} 
                        type="password" />
                </FormGroup>
            </Row>
            <Row>
                <Button>Submit</Button>
            </Row>
        </Form>
    )
}

export default SignInInput
