import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    setError('');
    navigate('/shop');
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div className="auth-container" style={{ maxWidth: 400, margin: '60px auto', padding: 32, borderRadius: 12 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', marginBottom: 24 }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8 }} />
          </div>
          {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ background: '#dc2626', color: '#fff', border: 'none', borderRadius: 20, padding: '10px 32px', fontSize: 16, cursor: 'pointer', width: '100%' }}>Sign Up</button>
        </form>
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
} 