import React from 'react'
import { Link } from "react-router-dom"

function Card({_id,image,title,description,deleteHandler,setId}) {
    console.log(image);
  return (
    <div className="mb-3 mt-3">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className='d-flex justify-content-start'>
            <Link className='btn btn-primary' to={`/update/${_id}`}>Update</Link>
            <form onSubmit={deleteHandler}>
                <button
                type='submit'
                className='btn btn-danger mx-2'
                onClick={() => setId(_id)}
                >Delete</button>
            </form>
            </div>
        </div>
    </div>

    // <div>
    //     hi there
    // </div>
  )
}

export default Card
