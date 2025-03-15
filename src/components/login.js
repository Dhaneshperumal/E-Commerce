import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import '../App.css';
import Header from './header';

const LogIn = () => {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowLogin(false);
    navigate('/');
  };

  return (
    <>
      <Header />
      {showLogin && (
        <div className='login'>
          <Container>
            <CloseButton className="float-end" onClick={handleClose} />
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control className="mb-3" type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="mb-3" type="password" placeholder="Password" required />
              </Form.Group>
              <Button className="SubmitButton" type="submit" variant="primary">Login</Button>
              <Form.Group className="dont" controlId="formBasicCheckbox">
                <Form.Label>Don't have an account?</Form.Label>
                <Link to="/signup"><Button variant="link">Sign Up</Button></Link>
              </Form.Group>
            </Form>
          </Container>
        </div>
      )}
    </>
  );
};

export default LogIn;









