import React, { useState } from 'react'
import "./AllPost.css"

function AllPost() {
    const [searchData, setSearchData] = useState("")
    const [data, setData] = useState('')
    function onChangeHandler(e) {
        setSearchData(() => (e.target.value))
    }
    function onClickHandler() {
        setData(() => (searchData))
        setSearchData('')
    }

    return (
        <>
            <div className='all-post-outer-con'>
                <h2>All User Post</h2>
                <div className='all-post-search-con'>
                    <input
                        className='all-post-search'
                        type="text"
                        value={searchData}
                        onChange={onChangeHandler}
                        placeholder='search the posts' /><button
                            className='all-post-btn'
                            onClick={onClickHandler}
                        >search</button>
                </div>
                {
                    postData.length > 0 && postData.map(function (item) {
                        console.log(item)
                        return (<div>
                            <h3 className='all-post-title'>{item.title}</h3>
                            <div className='all-post-image-con'>
                                {/* <p>image</p> */}
                            </div>
                            <div className='all-post-content-con'>
                                <p>{item.content}</p>
                            </div>
                            <div className='all-post-review-con'>
                                <span className='all-post-reviews reviews-likes'>like {item.like}</span>
                                <span className='all-post-reviews'>comment {item.comment}</span>
                                <span className='all-post-reviews'>share {item.share}</span>
                            </div>
                        </div>)
                    })
                }
            </div>
        </>
    )
}

export default AllPost


const postData = [
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
    {
        title: "this is title ",
        image: "",
        content: "this is content all about the image",
        like: 5,
        comment: 2,
        share: 1
    },
]