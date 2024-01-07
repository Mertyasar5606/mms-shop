import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { shop, setshop } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/shop");
  };

  return (
    <div>
      <div className='deneme'>
        <form className='forms' onSubmit={(e) => handleSubmit(e)}>
          <h1>Giriş</h1>
          <div className="email">
            <input
              type="email"
              placeholder="Lütfen Email Adresinizi giriniz"
              name="email"
              value={shop?.email}
              onChange={(e) => setshop({ ...shop, email: e.target.value })}
            />
          </div>
          <div className="sifre">
            <input
              type="password"
              placeholder="Lütfen parolanızı giriniz"
              name="password"
              value={shop?.password}
              onChange={(e) => setshop({ ...shop, password: e.target.value })}
            />
          </div>
          <button className='btn' type="submit">
            Giriş
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
