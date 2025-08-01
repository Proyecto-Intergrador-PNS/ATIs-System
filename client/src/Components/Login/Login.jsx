import React from 'react'
import './Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'

//React Icons Import
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";


// Acccets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.jpg'


const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>Sistema ATIs</h2>
            <p>Sistema de facturacion, inventariado y administracion</p>
          </div>


          <div className="footerDiv flex">
            <span className="text">Dont have an Account?</span>
            <Link to={'/register'}>
            <button className='btn'>Sing Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back</h3>
          </div>

          <form action="" className='form grid'>
            <span>Login Status will go here</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" id='username' placeholder='Enter Username' />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Pasword</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type="password" id='password' placeholder='Enter Password' />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            <span className='forgotPassword'>
              Forgot your password? <a href=''>Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login