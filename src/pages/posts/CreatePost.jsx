import React, { useState } from 'react'
import "./CreatePost.css"

function CreatePost() {
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
    })
    const [data, setData] = useState([])

    function onChangeHandler(e) {
        setPostData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function onclickHandler() {
        setData(() => [...data, postData])
        setPostData({
            title: "",
            content: "",
            image: "",
        })
    }

    console.log(data)
    return (
        <>
            <div className='create-post-outer-con'>
                <h1 className='create-post-head-text'>Create New Post</h1>
                <div className='create-post-inner-con'>
                    <div className='create-post-sub-inner-con'>
                        <span className='create-post-title'>Title</span>
                        <div>
                            <input
                                className='create-post-input-box-title'
                                placeholder='Enter the title'
                                type='text'
                                name="title"
                                value={postData.title}
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className='create-post-sub-inner-con'>
                        <span className='create-post-title'>Content</span>
                        <div>
                            <textarea
                                type="text"
                                name='content'
                                placeholder='enter the content'
                                value={postData.content}
                                className='create-post-input-box-content'
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className='create-post-sub-inner-con'>
                        <span className='create-post-title'>Image</span>
                        <div>
                            <input
                                type='file'
                                accept=".jpg, .jpeg, .png"
                                name='image'
                                value={postData.image}
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className='create-post-sub-inner-con'>
                        <button
                            onClick={onclickHandler}
                            className='create-post-btn' >Submit</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default CreatePost
