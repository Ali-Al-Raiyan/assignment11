import React from "react";
import blogs from "../../data/blogData.json";
import styles from "./postPage.module.css";

const Post = ({ params }) => {
  let blogArray = blogs["blogs"];

  return (
    <div>
      <h1 className={styles.myText}>{blogArray[params["id"]].title}</h1>
      <h3>{blogArray[params["id"]].content}</h3>
      <p>{blogArray[params["id"]].date}</p>
    </div>
  );
};

export default Post;
