import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Layout = () => {

    const location = useLocation()

    const isHome = location.pathname === "/";

    return (
        <div className='min-h-screen flex flex-col '>
            <ScrollToTop/>
            <Navbar />
            <main >
                <Outlet />
            </main>
            <section id="contact">
                <Footer />
            </section>
        </div>
    )
}

export default Layout