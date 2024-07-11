import React from 'react'
import signupImg from './../assets/Signup.png'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='w-full h-screen flex justify-between'>
            <div className="w-1/2 flex flex-col items-center justify-center">
                <div>
                    <h1 className='text-4xl text-[#11175D] font-bold mb-3'>Get started with easily register</h1>
                    <p className='text-xl text-[#00000050]'>Free register and you can enjoy it</p>
                    <div className='mt-[53px] flex flex-col gap-[48px] w-[368px]'>
                        <div className='relative'>
                            <label className='absolute left-[52px] top-[-12px] bg-white px-[15px]'>Email Address</label>
                            <input type="email" className='w-full py-[26px] pl-[52px] pr-[66px] border border-[#11175D50] rounded-lg text-xl font-semibold text-[#11175D70]' />
                        </div>
                        <div className='relative'>
                            <label className='absolute left-[52px] top-[-12px] bg-white px-[15px]'>Full name</label>
                            <input type="text" className='w-full py-[26px] pl-[52px] pr-[66px] border border-[#11175D50] rounded-lg text-xl font-semibold text-[#11175D70]' />
                        </div>
                        <div className='relative'>
                            <label className='absolute left-[52px] top-[-12px] bg-white px-[15px]'>Password</label>
                            <input type="password" className='w-full py-[26px] pl-[52px] pr-[66px] border border-[#11175D50] rounded-lg text-xl font-semibold text-[#11175D70]' />
                        </div>
                        <button className='w-full py-5 bg-[#5F35F5] text-xl text-white font-bold rounded-[86px] hover:bg-gradient-to-r from-[#3538f5] to-[#5F35F5] hover:rounded-lg duration-500 hover:shadow-md mb-[35px]'>Sign Up</button>
                        <p className='text-center text-sm text-[#03014C]'>Already  have an account ? <Link to="/" className='text-[#EA6C00] font-bold hover:text-[#a36f41] duration-500' href="#">Sign In</Link></p>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src={signupImg} alt="signup" className='w-full h-full ml-auto object-cover' />
            </div>
        </div>
    )
}

export default Signup
