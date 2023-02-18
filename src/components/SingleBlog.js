import React from "react";
import "./SingleBlog.scss";

export default function SingleBlog({ title, imgSrc, publish_date, contentLink }) {
  const selectPost = () => {
    window.open(contentLink, "_blank");
  };
  return (
    <div className="blog-container" onClick={selectPost}>
      <div className="left-container">
        <img className="blog-image" src={imgSrc} />
      </div>
      <div className="right-container">
        <p className="blog-title">{title}</p>
        <p className="blog-summary">{publish_date}</p>
      </div>
    </div>
  );
}
