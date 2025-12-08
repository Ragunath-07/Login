import './component.css'
import BackgroundImg from './BackgroundImg'
import "remixicon/fonts/remixicon.css";
import apple from '../assets/icon-apple.svg'
import facebook from '../assets/icon-facebook.svg'
import google from '../assets/icon-google.svg'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function LoginAccount() {

    const [showPassword, setshowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(true);

    const navigate = useNavigate()

    const handleEmail = (evt) => {
        setEmail(evt.target.value)
    }

    const handlePassword = (evt) => {
        setPassword(evt.target.value)
    }

    const handleEyeacess = () => {
        setshowPassword(!showPassword)
    }

    const handleCheck = (evt) => {
        evt.preventDefault()
        var loginDetails = axios.post("https://login-backend-551n.onrender.com/details", { "email": email, "password": password })
        loginDetails.then(function (data) {
            if (data.data === true) {
                navigate('/dashboard')
            }
            else {
                setError(false)
            }
        })
    }   

    return (

        <>
            {/* Login Page Background Image */}
            <BackgroundImg />

            {/* Login Container */}
            <div className='login container grid relative h-[100vh] items-center overflow-hidden'>

                <div className='login__access'>
                    <h1 className='text-3xl font-bold text-black text-center mb-10 login__title'>Log in to your account.</h1>

                    {error ? <p className='text-center mb-5 text-sm font-semibold text-white login__error'>_</p> :
                        <p className='text-center text-sm mb-5 font-semibold text-red-500 login__error'>Invalid email or password</p>}

                    {/* Login Area */}
                    <div className='login__area mx-10'>
                        <form onSubmit={handleCheck}>

                            {/* Login Content */}
                            <div className='login__content'>

                                {/* Login Box */}
                                <div className='relative flex items-center rounded-3xl bg-[#F4F6FB] mb-5'>
                                    <input type="email" name='email'
                                        required
                                        placeholder='Email'
                                        className='bg-transparent w-full py-5 pl-5 pr-10 font-semibold border-solid border-2 border-transparent rounded-3xl text-black focus:border-blue-500'
                                        onChange={handleEmail}
                                    />
                                    <i className="ri-mail-fill absolute right-5 text-xl"></i>
                                </div>

                                <div className='relative flex items-center rounded-3xl bg-[#F4F6FB]'>
                                    <input type={showPassword ? 'text' : 'password'} name='password'
                                        required
                                        placeholder='Password'
                                        className='bg-transparent w-full py-5 pl-5 pr-10 font-semibold border-solid border-2 border-transparent rounded-3xl text-black focus:border-blue-500'
                                        onChange={handlePassword}
                                    />
                                    <i className={`absolute right-5 text-xl cursor-pointer z-10 ${showPassword ? 'ri-eye-fill' : 'ri-eye-off-fill'}`}
                                        onClick={handleEyeacess}></i>
                                </div>

                            </div>

                            <a href="#" className='block w-max mt-4 mr-0 mb-0 ml-auto font-semibold text-sm hover:text-blue-500'>Forgot your password?</a>

                            {/* Login Button */}
                            <button type='submit'
                                className='w-full bg-blue-500 text-white inline-flex justify-center font-semibold py-6 rounded-full my-10
                                hover:shadow-xl transition-shadow duration-300'
                            >Login</button>
                        </form>

                        {/* Login Social */}
                        <div className='mb-6'>
                            <p className='text-center mb-5 text-sm font-semibold text-black'>Or login with</p>

                            <div className='flex justify-center items-center gap-6'>
                                <a href="#" className='login__social-link'>
                                    <img src={google} alt="Google" className='w-5' />
                                </a>

                                <a href="#" className='login__social-link'>
                                    <img src={facebook} alt="facebook" className='w-5' />
                                </a>

                                <a href="#" className='login__social-link'>
                                    <img src={apple} alt="apple" className='w-5' />
                                </a>
                            </div>
                        </div>

                        <p className='text-center text-sm'>Don't have an account?
                            <button className='text-sm font-semibold text-blue-500 bg-transparent mx-1'>Create Account</button>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginAccount