import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically send credentials to a backend service
    console.log('Login attempted with:', { email, password });
    alert('Login submitted');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Welcome Back</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  form: {
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#fff',
    width: '360px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    border: '1px solid #e5e7eb',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#dc2626',
    fontSize: '1.875rem',
    fontWeight: '600',
  },
  input: {
    padding: '0.875rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #000',
    backgroundColor: '#fff',
    transition: 'all 0.2s',
    outline: 'none',
    ':focus': {
      borderColor: '#dc2626',
      boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.1)',
    },
  },
  button: {
    padding: '0.875rem',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s',
    ':hover': {
      backgroundColor: '#b91c1c',
    },
    ':active': {
      transform: 'scale(0.98)',
    },
  },
};

export default LoginPage;
