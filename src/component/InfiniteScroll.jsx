import  { useEffect, useState } from 'react'
import "../index.css"
import Post from './Post';

const InfiniteScroll = () => {
  
  const [pageNo,setPageNo]=useState(1);
  const [data,setData]=useState([]);

  console.log("Data",data)

  useEffect(()=>{
    async function fetchData(){
     let store=await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)

     const response=await store.json()

     console.log(response)

     setData(prev=>[...prev,...response])
      
    }
    fetchData()
   
  },[pageNo])
  return (
   <Post data={data}/>
  )
}

export default InfiniteScroll