import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer-outer-con'>
                <ul className='footer-list'>
                    <Link to="/all-posts">
                        <li className='footer-list-item'>All Post</li>
                    </Link>
                    <Link to="/create-new-post">
                        <li className='footer-list-item'>Create Post</li>
                    </Link>
                    <Link to="/user-profile">
                        <li className='footer-list-item'>user Profile</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Footer