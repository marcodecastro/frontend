import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mail from "../images/email.png";
import lock from "../images/lock.png";
import profile from "../images/icon.png";
import '../styles/Login.css'; 
import '../styles/reset.css';

function Login() {
  const [form, setForm] = useState({ email: '', senha: '', cim: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Erro desconhecido');
      }

      const now = new Date().getTime();
      const expiry = now + 1 * 60 * 60 * 1000; // 1 hora de validade do token

      // Salvando token, validade do token e dados do usuário no localStorage
      localStorage.setItem('token', responseData.token);
      localStorage.setItem('tokenExpiry', expiry);
      localStorage.setItem('userData', JSON.stringify(responseData.membro)); // Armazenando userData corretamente
      
      navigate('/inicial');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='main'>
        <div className='sub-main'>
          <div>
            <div>

              <div className='imgs'>
              <div className='input-container'>
                <img src={profile} alt="profile" className='profile' />
              </div>
              </div>

              <h1>Login</h1>
              <div className='mail-id'>
                <img src={mail} alt="email" className='email' />
                <input type="email" placeholder='Digite seu Email' className='fill' value={form.email} onChange={handleChange} name="email"/>
              </div>
              <div className='mail-id'>
                <img src={lock} alt="senha" className='email' />
                <input type="password" placeholder='Digite a Senha' className='fill' value={form.senha} onChange={handleChange} name="senha"/>
              </div>
              <div className='mail-id'>
                <img src={profile} alt="cim" className='email' />
                <input type="text" placeholder='Digite seu CIM' className='fill' value={form.cim} onChange={handleChange} name="cim"/>
              </div>
              <div className='login-btn'>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </button>
              </div>
              {error && <p className="error">{error}</p>}
              <div className='reg-link'>
                <p>Ainda não tem uma conta ?</p>
                <Link className='link' to='/registrar'>
                  Registre-se
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;





