import React, { useState, useEffect } from "react";
import "./BlogTab.scss";
import FeaturedArticle from "./FeaturedArticle.js";
import SingleBlog from "./SingleBlog.js";

export default function BlogTab() {
  const [displayPosts, setDisplayPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aayushdevgan");
      const responseJson = await response.json();
      setDisplayPosts(responseJson["items"]);
    }
    fetchData();
  }, []);

  return (
    <div className="blogs-container">
      <hr style={{ border: "1px solid #EDEDED", width: "55vw" }} />
      {displayPosts.length > 0 && (
        <FeaturedArticle
          title={displayPosts[0]["title"]}
          imgSrc={displayPosts[0]["thumbnail"]}
          publish_date={displayPosts[0]["pubDate"]}
          contentLink={displayPosts[0]["link"]}
        />
      )}
      {displayPosts.map((post, index) => {
        if (index > 0) {
          return (
              <SingleBlog
                  key={index}
                  title={displayPosts[index]["title"]}
                  imgSrc={displayPosts[index]["thumbnail"]}
                  publish_date={displayPosts[index]["pubDate"]}
                  contentLink={displayPosts[index]["link"]}
              ></SingleBlog>
          );
        }
      })}
      <hr style={{ border: "1px solid #E9E9E9" }} />
    </div>
  );
}
