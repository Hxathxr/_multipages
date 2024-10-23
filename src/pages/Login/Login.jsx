
import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { verifyUser } from '../../data/users';
import './Login.css';

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(''); 

  const handleLogin = (event) => {
    event.preventDefault(); 
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    const userInfo = verifyUser(user, pass);

    userRef.current.value = '';
    passRef.current.value = '';

    if (userInfo === null) {
      setError('Wrong username or password'); 
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
      setError(''); 
    }
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="user"
            style={{ textAlign: 'center' }}
            ref={userRef}
          />
        </Form.Group>

        <Form.Group htmlFor="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="pass"
            style={{ textAlign: 'center' }}
            ref={passRef}
          />
        </Form.Group>

        {error && <p className="text-danger mt-2">{error}</p>} {/* ข้อความแสดงข้อผิดพลาด */}

        <Button type="submit" variant="success" className="mt-3">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;