import React from 'react'
import { Link } from "react-router-dom"

function Card({blog,deleteHandler,setId}) {
    console.log(blog.image);
  return (
    <div className="mb-3 mt-3">
        {/* <img src={blog.image} className="card-img-top" alt={blog.title} />
        <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.descr}</p>
            <div className='d-flex justify-content-start'>
            <Link className='btn btn-primary' to={`/update/${blog._id}`}>Update</Link>
            <form onSubmit={deleteHandler}>
                <button
                type='submit'
                className='btn btn-danger mx-2'
                onClick={() => setId(blog._id)}
                >Delete</button>
            </form>
            </div>
        </div> */}
        Hi there
    </div>

    // <div>
    //     hi there
    // </div>
  )
}

export default Card
