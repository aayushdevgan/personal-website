import React from "react";
import "./FeaturedArtcle.scss";

export default function FeaturedArticle({title, imgSrc, publish_date, contentLink
}) {
  const selectPost = () => window.open(contentLink, "_blank");
  return (
    <div className="featured-container" onClick={selectPost}>
      <div className="image-container">
        <img className="featured-image" src={imgSrc} />
        <p className="featured-title">{title}</p>
      </div>
      <div className="featured-details">
        <p className="publish-date">{publish_date}</p>
      </div>
    </div>
  );
}
