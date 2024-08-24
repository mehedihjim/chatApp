import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Rootlayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Rootlayout
