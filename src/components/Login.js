import React from "react";
import './login.css';

function Login () {
  return(
    <div className={'container'}>
      <div className={'container-login'}>
        <h2 className={'text-login'}>Bienvenido</h2>
        <div className={'container-inputs'}>
        <input className={'input-login'} type={'text'} placeholder={'Name'}/>
        <input  className={'input-login'} type={'password'} placeholder={'Password'}/>
        <button className={'button-login'}>Login</button>
      </div>
        <div className={'container-links'}>
          <a href={'#'}>Perdiste la contraseña?</a>
          <a href={'#'}>No tienes cuenta? Registrate aqui</a>
        </div>
      </div>

    </div>
  )
}

export default Login