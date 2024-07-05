import React, { useEffect, useState } from 'react'
import axios from "axios"

import Card from './Card.jsx';

const TravelBook = () => {
  const [id, setId] = useState('')
  const [data,setData] = useState(null);

  

  const deleteHandler = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
    // fetchData()
  }

  useEffect(() => {
    const fetchData = () => {
      // axios.get("http://localhost:5000/api/travel")
      fetch(`http://localhost:5000/api/travel`,{
        method : 'GET',
        headers: {"Content-Type": "application/json"},
        credentials : "include"
      })
      .then((res)=>{return res.json()}).then((d)=>{
        setData(d.travels);
      })
      .catch((err)=>{
        console.log(err);
        alert(err.message);
      })
    }
    fetchData();
    console.log(data);
  }, [])


  return (
    <div>
      { 
        (data!==null)?(data.map((blog)=>{
          return (
            <Card key={blog._id} _id={blog._id} image={blog.image} title={blog.title} description={blog.descr} setId={setId} deleteHandler={deleteHandler}/>
          )
        }))
        :
        (<h1 className="text-3xl mt-[100px]">Loading...</h1>)
      }
    </div>
  )
}

export default TravelBook
