import React, { useEffect } from "react";

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

  return (
    <div className="container">
      <h2>Unlimited Entertainment</h2>
      <div style={{ marginTop: "20px" }} className="container">
        {data.map((item) => {
          return (
            <img className="image-post" key={item.id} src={item.download_url} />
          );
        })}
      </div>
    </div>
  );
};

export default Post;
