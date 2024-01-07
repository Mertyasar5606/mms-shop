import React from 'react'


function Login() {
  return (
    <div>
      <div className='forms'>
    <h1>Giriş</h1>
    <div className="email"> 
        <input type="email"  placeholder="Lütfen Email Adresinizi giriniz"/>
    </div>
  <div className="sifre">
  <input type="password" placeholder="Lütfen parolanızı giriniz"/>
  </div>
<button className='btn'>
  Giriş
</button>
    </div>
      
    </div>
  )
}

export default Login
