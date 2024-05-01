import React, { useState } from 'react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!email.endsWith('.ru')) {
      setEmailError('Yalnız .ru domenlərinə icazə verilir.');
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Ən azı 8 simvol.');
    } else {
      setPasswordError('');
    }

    if (email.endsWith('.ru') && password.length >= 8) {
      console.log("Login is successful!");
      // Burada login funksionalitetini əlavə edə bilərsiniz

      // Formu təmizləmək üçün input dəyərlərini sıfırlayırıq
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h2>Qeydiyyat formu</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      <br />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;

