import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Add registration logic here
    console.log('Register:', { name, email, password, confirmPassword, phone });
    // Navigate to home after registration
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded" style={{ minWidth: '400px', maxWidth: '600px', width: '100%' }}>
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="name" className="form-label me-3" style={{ minWidth: '120px' }}>Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="email" className="form-label me-3" style={{ minWidth: '120px' }}>Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="courses" className="form-label me-3" style={{ minWidth: '120px' }}>Courses</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="password" className="form-label me-3" style={{ minWidth: '120px' }}>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="confirmPassword" className="form-label me-3" style={{ minWidth: '120px' }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
