import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import NavLogo from '../../assets/brands/Nav-Logo.png';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error));
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image
                        src={NavLogo}
                        width='80px'
                        height='80px'
                    ></Image>
                    <Navbar.Brand href="#codingAcademy">Coding Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Link className='me-4 text-white text-decoration-none ' to='/home'>Home</Link>
                        <Link className='me-4 text-white text-decoration-none ' to='/courses'>Courses</Link>
                        <Link className='me-4 text-white text-decoration-none ' to='/faq'>FAQ</Link>
                        <Link className='me-4 text-white text-decoration-none ' to='/blog'>Blog</Link>
                        <Link className='me-4 text-white text-decoration-none ' to='/checkout'>Checkout</Link>
                        {/* <Link className='me-4' to='/login'>Login</Link>
                        <Link className='me-4' to='/register'>Register</Link> */}
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user.displayName
                                            }</span>
                                            <Button variant='success' onClick={handleLogout} >Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link className='me-4' to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }}
                                            roundedCircle
                                            src={user?.photoURL}
                                        ></Image>
                                        :
                                        <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;