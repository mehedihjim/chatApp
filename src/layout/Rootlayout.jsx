import React from 'react'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
    return (
        <>
            <h1>Hello</h1>
            <Outlet />
        </>
    )
}

export default Rootlayout
