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

const RegisterInput = ({setUser}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirm){
            return alert("Sorry, your passwords didn't match.")
        }
        if(username.length < 3){
            return alert("Sorry, your username must be three characters or longer.")
        }
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let data = JSON.stringify({
            "username" : username,
            "email" : email,
            "password" : password
        });

        let requestOptions = {
            method : 'POST',
            headers : myHeaders,
            body : data
        }
        fetch("http://localhost:5000/api/users/register", requestOptions)
            .then(response => response.text())
            .then(result => {
                let parsed = JSON.parse(result)
                if(!parsed.error){
                    localStorage.setItem('jwt', `bearer ${parsed.token}`);
                    localStorage.setItem('username', username)
                    let time = new Date()
                    time.setDate(time.getDate()+2)
                    localStorage.setItem("timeout", time)
                    setUser(username)
                    window.location.replace('/characters')
                } else {
                    alert("Sorry, that email has already been used.")
                }
            })
            .catch(error => console.log('error', error));
            setUser(username)
    } 

    return (
        <Form className="text-info" onSubmit={handleSubmit}>
            <Row className="mt-2 mb-2">
                <FormGroup>
                    <Label>Username:</Label>
                    <Input 
                        value={username} 
                        onChange= {e=> setUsername(e.target.value)}
                        placeholder="adventure123" />
                </FormGroup>
            </Row>
            <Row className="mb-2">
            <p>(Please feel free to use a fake email)</p>
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
            <Row className="mb-2">
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input 
                        value={confirm}
                        onChange= {e=> setConfirm(e.target.value)}
                        type="password"
                        />
                </FormGroup>
            </Row>
            <Row>
                <Button>Submit</Button>
            </Row>
        </Form>
    )
}

export default RegisterInput
