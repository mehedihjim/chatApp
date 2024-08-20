import React, { useState } from 'react';
import signupImg from './../assets/Signup.png';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { Watch } from 'react-loader-spinner';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [emailError, setEmailError] = useState('');
    let [nameError, setNameError] = useState('');
    let [passwordError, setPasswordError] = useState('');

    let [passwordShow, setPasswordShow] = useState(false);

    let [success, setSuccess] = useState(false);

    let handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    }
    let handleName = (e) => {
        setName(e.target.value);
        setNameError("");
    }
    let handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    }

    let handleSubmit = () => {
        let isValid = true;

        if (!email) {
            setEmailError(<Alert severity="error">This Field is Required</Alert>);
            isValid = false;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError(<Alert severity="error">Invalid Email</Alert>);
            isValid = false;
        }

        if (!password) {
            setPasswordError(<Alert severity="error">This Field is Required</Alert>);
            isValid = false;
        }

        if (!name) {
            setNameError(<Alert severity="error">This Field is Required</Alert>);
            isValid = false;
        }

        if (!isValid) return;

        const auth = getAuth();

        if (email && name && password) {
            setSuccess(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                })
                .catch((error) => {
                    setSuccess(false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (error.code.includes('auth/email-already-in-use')) {
                        setEmailError(<Alert severity="error">Email Already in Use</Alert>);
                    }
                });
        }
    }

    return (
        <div className='w-full h-screen flex flex-col lg:flex-row justify-between'>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4">
                <div>
                    <h1 className='text-2xl lg:text-4xl text-[#11175D] font-bold mb-3'>Get started with easily register</h1>
                    <p className='text-lg lg:text-xl text-[#00000050]'>Free register and you can enjoy it</p>
                    <div className='mt-8 lg:mt-[53px] flex flex-col gap-6 lg:gap-[48px] w-full max-w-md'>
                        <div className='relative'>
                            <label className='absolute left-4 lg:left-[52px] top-[-12px] bg-white px-2 lg:px-[15px]'>Email Address</label>
                            <input onChange={handleEmail} type="email" className='w-full py-4 lg:py-[26px] pl-4 lg:pl-[52px] pr-4 lg:pr-[66px] border border-[#11175D50] rounded-lg text-lg lg:text-xl font-semibold text-[#11175D70]' />
                            {emailError && <div className='py-1'>{emailError}</div>}
                        </div>
                        <div className='relative'>
                            <label className='absolute left-4 lg:left-[52px] top-[-12px] bg-white px-2 lg:px-[15px]'>Full name</label>
                            <input onChange={handleName} type="text" className='w-full py-4 lg:py-[26px] pl-4 lg:pl-[52px] pr-4 lg:pr-[66px] border border-[#11175D50] rounded-lg text-lg lg:text-xl font-semibold text-[#11175D70]' />
                            {nameError && <div className='py-1'>{nameError}</div>}
                        </div>
                        <div className='relative'>
                            <label className='absolute left-4 lg:left-[52px] top-[-12px] bg-white px-2 lg:px-[15px]'>Password</label>
                            <input onChange={handlePassword} type={passwordShow ? "text" : "password"} className='w-full py-4 lg:py-[26px] pl-4 lg:pl-[52px] pr-4 lg:pr-[66px] border border-[#11175D50] rounded-lg text-lg lg:text-xl font-semibold text-[#11175D70]' />
                            {passwordShow ?
                                <RiEye2Line onClick={() => setPasswordShow(false)} className='text-xl absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer' />
                                :
                                <RiEyeCloseLine onClick={() => setPasswordShow(true)} className='text-xl absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer' />
                            }
                            {passwordError && <div className='py-1'>{passwordError}</div>}
                        </div>
                        <button onClick={handleSubmit} className='w-full py-4 lg:py-5 bg-black text-lg lg:text-xl text-white font-bold rounded-full lg:rounded-[86px] hover:bg-gradient-to-r from-[#11175D] to-black hover:rounded-lg duration-500 hover:shadow-lg mb-8 lg:mb-[35px] flex justify-center items-center'>
                            {success ?
                                <Watch
                                    visible={true}
                                    height="26"
                                    width="26"
                                    radius="48"
                                    color="#ffffff"
                                    ariaLabel="watch-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="transform -translate-l-[-50%]"
                                />
                                : "Sign Up"}
                        </button>
                        <p className='text-center text-sm lg:text-base text-[#03014C]'>Already have an account? <Link to="/" className='text-[#11175D] font-bold hover:text-[#11175D70] duration-500'>Sign In</Link></p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 hidden lg:block">
                <img src={signupImg} alt="signup" className='w-full h-full object-cover' />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup;
