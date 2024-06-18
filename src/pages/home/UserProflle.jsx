import React, { useState } from 'react'
import "./UserProflle.css"

function UserProflle() {
    const [userProfileData, setUserProfileData] = useState({
        username: "akashduhoon",
        first_name: "Akash",
        last_name: "Kumar"
    })
    return (
        <>
            <div className='user_profile_outer-con'>
                <div className='user_profile_head-con'>
                    <h2 className='user_profile_head-text'>User Profile</h2>
                    <div className='user_profile_image-details-con'>
                        <div className='user_profile_image-con'>
                            <p className='user_profile_image-text'>User Image</p>
                            {/* <image /> */}
                        </div>
                        <div className='user_profile_details-con'>
                            <h1>user details</h1>
                            <p>UserName : {userProfileData.username}</p>
                            <p>First Name : {userProfileData.first_name}</p>
                            <p>Last  Name : {userProfileData.last_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProflle