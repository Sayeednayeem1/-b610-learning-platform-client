import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .then( error =>{
            console.log(error);
        });
    }

    return (
        <div>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto mt-5'>
                <h4 className='mb-4 text-primary'>Please Login</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;