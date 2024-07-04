import React, { useEffect, useState } from 'react'
import axios from "axios"

import Card from './Card.jsx';

const TravelBook = () => {
  const [blogs, setBlogs] = useState([])
  const [id, setId] = useState('')

  

  const deleteHandler = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
    // fetchData()
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/api/travel");
      console.log(data);
      setBlogs(data.travels)
    }
    fetchData()
  }, [])



  return (
    <div>
      {
        // blogs.map((blog) => (
        //   return <Card key={blog._id} image={blog.image} title={blog.title} description={blog.description} deleteHandler={deleteHandler} setID={setId}/>
        // ))

        (blogs)?(
          <div>
            Hi there2
          </div>
        ):blogs.map((blog)=>{
          return (<Card key={blog._id} image={blog.image} title={blog.title} description={blog.description} deleteHandler={deleteHandler} setID={setId}/>)
        })
      }
      Hi there
    </div>
  )
}

export default TravelBook
