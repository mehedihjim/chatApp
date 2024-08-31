import React, { useState } from 'react'
import signupImg from './../assets/Login.jpg'
import { Link } from 'react-router-dom'
import { Alert } from '@mui/material'
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loggedinUserInfo } from '../slices/userSlice';

const Signup = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // Firebase Import

    let dispatch = useDispatch();

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [emailerror, setEmailError] = useState('')
    let [passworderror, setPasswordError] = useState('')

    let [passwordShow, setPasswordShow] = useState(false)

    let handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError("")
    }
    let handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")
    }

    let handleSubmit = () => {
        if (!email) {
            setEmailError(<Alert severity="error">This Field is Required</Alert>)
        } if (!password) {
            setPasswordError(<Alert severity="error">This Field is Required</Alert>)
        }

        if (email && password) {
            localStorage.setItem('user', 'Jim')
            // signInWithEmailAndPassword(auth, email, password)
            //     .then((userCredential) => {
            //         const user = userCredential.user;
            //         dispatch(loggedinUserInfo(user));
            //     })
            //     .catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //         if (error.code.includes('auth/invalid-credential')) {
            //             setPasswordError(<Alert severity="error">Email or Password is Wrong</Alert>);
            //         }
            //     });
        }
    }

    let handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(result)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error)
            });
    }

    return (
        <div className='w-full h-screen flex flex-col lg:flex-row justify-between'>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4">
                <div>
                    <h1 className='text-2xl lg:text-4xl text-[#11175D] font-bold mb-3'>Login to your account!</h1>
                    <div className='mt-8 lg:mt-[53px] flex flex-col gap-6 lg:gap-[48px] w-full max-w-md'>
                        <div className="btnBox flex">
                            <button className='flex gap-3 rounded-lg pl-[30px] pr-[42px] py-6 border border-[#03014C]/30 font-semibold text-sm text-[#03014C] hover:shadow-lg duration-500' onClick={handleGoogleLogin}><FcGoogle className='my-auto text-xl' />Login with Google</button>
                        </div>
                        <div className='relative'>
                            <label className='absolute left-4 lg:left-[52px] top-[-12px] bg-white px-2 lg:px-[15px]'>Email Address</label>
                            <input onChange={handleEmail} type="email" className='w-full py-4 lg:py-[26px] pl-4 lg:pl-[52px] pr-4 lg:pr-[66px] border border-[#11175D50] rounded-lg text-lg lg:text-xl font-semibold text-[#11175D70]' />
                            {emailerror &&
                                <div className='py-1'>{emailerror}</div>
                            }
                        </div>
                        <div className='relative'>
                            <label className='absolute left-4 lg:left-[52px] top-[-12px] bg-white px-2 lg:px-[15px]'>Password</label>
                            <input onChange={handlePassword} type={passwordShow ? "text" : "password"} className='w-full py-4 lg:py-[26px] pl-4 lg:pl-[52px] pr-4 lg:pr-[66px] border border-[#11175D50] rounded-lg text-lg lg:text-xl font-semibold text-[#11175D70]' />
                            {passwordShow ?
                                <RiEye2Line onClick={() => setPasswordShow(false)} className='text-xl absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer' />
                                :
                                <RiEyeCloseLine onClick={() => setPasswordShow(true)} className='text-xl absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer' />
                            }
                            {passworderror &&
                                <div className='py-1'>{passworderror}</div>
                            }
                        </div>
                        <button onClick={handleSubmit} className='w-full py-4 lg:py-5 bg-black text-lg lg:text-xl text-white font-bold rounded-full lg:rounded-[86px] hover:bg-gradient-to-r from-[#11175D] to-black hover:rounded-lg duration-500 hover:shadow-lg mb-8 lg:mb-[35px]'>Login to Continue</button>
                        <p className='text-center text-sm lg:text-base text-[#03014C]'>Don’t have an account ? <Link to="/signup" className='text-[#11175D] font-bold hover:text-[#11175D70] duration-500'>Sign up</Link></p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 hidden lg:block">
                <img src={signupImg} alt="signup" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default Signup
