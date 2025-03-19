import React, { useState, useEffect} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import '../App.css';


const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEmail = localStorage.getItem('email');
    if (formData.email === existingEmail) {
      setMessage('Account already exists with this email ID.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

// Saved mail & pass
    localStorage.setItem('email', formData.email);
    localStorage.setItem('password', formData.password);

    setMessage('Account created successfully!');
    setTimeout(() => navigate('/login'), 1500); 
  };

  const [showSignUp, setShowSignUp] = useState(true);
    
  const handleClose = () => {
        setShowSignUp(false);
        navigate('/');
      };

  useEffect(() => {
    if (setShowSignUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [setShowSignUp]);

  return (
    <div style={{
      backgroundImage: `url("${process.env.PUBLIC_URL}/loginbg2.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
    }}>
    
     
      { showSignUp && (
      <div className="signup">
        <Container>
          <CloseButton className="float-end" onClick={handleClose} />
          <h2>Signup</h2>
          <Form onSubmit={handleSubmit}>
            {message && <div className="alert alert-info">{message}</div>}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="mb-3"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="mb-3"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="mb-3"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">Create Account</Button>
            <Form.Group className="mt-3 dont">
              <Form.Label>Already have an account? <a href="/login">Login</a></Form.Label>
            </Form.Group>
          </Form>
        </Container>
      </div>
      )}
    </div>
  );
};

export default SignUp;