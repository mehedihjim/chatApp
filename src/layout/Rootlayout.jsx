import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Searchbar from '../components/Searchbar'

const Rootlayout = () => {
    return (

        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Rootlayout
