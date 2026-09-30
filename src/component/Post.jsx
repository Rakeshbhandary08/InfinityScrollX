import React, { useEffect } from 'react'

const Post = ({data}) => {

    //how to create and manage observer
    useEffect(()=>{
        const observer=new IntersectionObserver((param)=>{
            console.log(param)
        })
        
        const lastImage=document.querySelector(".image-post:last-child")
        console.log(lastImage)

        observer.observe(lastImage)
        
    },[data])


  return (
     <div className='container'>
        <h2 >Unlimited Entertainment</h2>
      <div style={{marginTop:"20px"}} className='container'>
      {
        data.map((item)=>{
            return(
                <img className='image-post' key={item.id} src={item.download_url}/>
            )
        })
      }
      </div>
    </div>
  )
}

export default Post