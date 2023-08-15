import React from "react";
import styles from "./blogPage.module.css";
import blogs from "../data/blogData.json";
import Link from "next/link";

const page = () => {
  let blogArray = blogs["blogs"];
  return (
    <div>
      <h1>All Blogs</h1>
      {blogArray.map((item, index) => {
        return (
          <div>
            <h3>
              <Link className={styles.myText} href={"/blog/" + item["id"]}>
                {item["title"]}
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default page;
