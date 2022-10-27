import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/checkout';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate(from, { replace: true });
                form.reset();
            })
            .then(error => {
                console.error(error);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .then(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <h4 className='mb-4 text-primary'>Please Register</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="photoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="password" required />
                </Form.Group>
                <p>Already have an accopunt? <Link to='/login'>Please Login</Link></p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Button onClick={handleGoogleLogin} className='ms-2' variant="outline-primary"> <FaGoogle></FaGoogle> Google Sign In</Button>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;