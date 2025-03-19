import React, { useState, useEffect } from 'react';  
import { Navbar, Container, Nav, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import '../index.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const categories = ['/Handgun', '/Rifle', '/Shotgun', '/Specialty', '/Revolver', '/Tactical', '/Training'];

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    setSearchQuery(queryParams.search || '');
  }, [location.search]);

  useEffect(() => {
    const checkAuthStatus = () => {
      setIsAuthenticated(localStorage.getItem('isLoggedIn') === 'true');
    };
    
    checkAuthStatus();
    window.addEventListener('storage', checkAuthStatus);
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${searchQuery}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      {/* Navbar for Large Screens */}
      <Navbar expand='lg' className='navbar navhead d-none d-lg-flex'>
        <Container>
          <Navbar.Brand as={Link} to='/'>ARMORY X</Navbar.Brand>
          <Form className='d-flex navb' onSubmit={handleSearchSubmit}>
            {!isAuthPage && (
              <>
                <Form.Control
                  type='search'
                  className='textarea me-2'
                  placeholder='Search'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Button type='submit' variant='outline-light'>🔍</Button>
              </>
            )}
            {!isAuthenticated ? (
              <>
                <Link to='/login'><Button variant='outline-light'>Login</Button></Link>
                <Link to='/signup'><Button variant='outline-light'>Signup</Button></Link>
              </>
            ) : (
              <>
                <Button variant='outline-light' onClick={handleLogout}>Logout</Button>
                <Link to='/addtocart'><Button variant='outline-light'>Cart</Button></Link>
              </>
            )}
          </Form>
        </Container>
      </Navbar>

      {/* Navbar for Mobile */}
      <Navbar expand='lg' className='navbar navhead d-lg-none'>
        <Container>
          <Navbar.Brand as={Link} to='/'>ARMORY X</Navbar.Brand>
          <div className='d-flex align-items-center'>
            <Button variant='link' onClick={() => setShowSearch(!showSearch)}>🔍</Button>
            <Link to='/addtocart'><Button variant='link'>🛒</Button></Link>
            <Button variant='link' onClick={() => setShowMenu(true)}>☰</Button>
          </div>
        </Container>
      </Navbar>

      {/* Search Bar for Mobile */}
      {showSearch && (
        <div className='search-bar'>
          <Form onSubmit={handleSearchSubmit}>
            <Form.Control
              type='search'
              className='textarea w-100'
              placeholder='Search'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Form>
        </div>
      )}

      {/* Sidebar Menu for Mobile */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='flex-column'>
            <Nav.Link as={Link} to='/' onClick={() => setShowMenu(false)}>Home</Nav.Link>
            {categories.map((category) => (
              <Nav.Link key={category} as={Link} to={category} onClick={() => setShowMenu(false)}>
                {category.replace('/', '')}
              </Nav.Link>
            ))}
          </Nav>
          {!isAuthenticated ? (
            <>
              <Link to='/login'><Button variant='outline-light' onClick={() => setShowMenu(false)}>Login</Button></Link>
              <Link to='/signup'><Button variant='outline-light' onClick={() => setShowMenu(false)}>Signup</Button></Link>
            </>
          ) : (
            <>
              <Button variant='outline-light' onClick={handleLogout}>Logout</Button>
              <Link to='/addtocart'><Button variant='outline-light' onClick={() => setShowMenu(false)}>Cart</Button></Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <hr className='hr' />

      {/* Desktop Navigation Menu */}
      {!isAuthPage && (
        <Nav className='justify-content-center navbar navitem d-none d-lg-flex'>
          <Nav.Item><Nav.Link as={Link} to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link></Nav.Item>
          {categories.map((category) => (
            <Nav.Item key={category}>
              <Nav.Link as={Link} to={category} className={location.pathname === category ? 'active' : ''}>
                {category.replace('/', '')}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      )}
    </>
  );
};

export default Header;