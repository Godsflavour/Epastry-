import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
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
        <h2 style={{ fontFamily: 'Playfair Display, serif', marginBottom: 24 }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8 }} />
          </div>
          {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ background: '#dc2626', color: '#fff', border: 'none', borderRadius: 20, padding: '10px 32px', fontSize: 16, cursor: 'pointer', width: '100%' }}>Login</button>
        </form>
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
} 