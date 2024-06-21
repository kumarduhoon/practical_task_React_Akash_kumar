import React from 'react'
import "./Layout.css"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='layout-main-con'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout