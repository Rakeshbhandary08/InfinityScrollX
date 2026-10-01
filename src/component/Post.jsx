import React, { useEffect } from "react";
import downloadImg from "../assets/downloads.png"

const Post = ({ data, setPageNo }) => {
  //how to create and manage observer
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      console.log(param);
      if (param[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPageNo((pageNo) => pageNo + 1);
      }
    },{threshold:0});

    const lastImage = document.querySelector(".image-post:nth-last-child(4)");
    console.log(lastImage);

    if (!lastImage) return;

    observer.observe(lastImage);

    return ()=>{
      observer.disconnect()
    }
  }, [data]);

  //handle downlaod function
  async function handleDownload(url){
    
    try {
      const response=await fetch(url)
      const blob=await response.blob()
      const blobUrl=URL.createObjectURL(blob)
  
      const link=document.createElement("a")
      link.href=blobUrl
      link.download="image.jpg"
  
      link.click();
  
      link.remove()
  
      window.URL.revokeObjectURL(blobUrl);
      
    } catch (error) {
       console.log("Download Failed",error.message)
    }
  }

  return (
    <div className="container">
      <h2>Unlimited Entertainment</h2>
      <div style={{ marginTop: "20px" }} className="container">
        {data.map((item) => {
          return (
            <div className="img-box" key={item.id} >
            <img className="image-post" src={item.download_url}/>
            <img className="download-btn" src={downloadImg} onClick={()=>handleDownload(item.download_url)}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
