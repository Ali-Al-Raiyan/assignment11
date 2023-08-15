import React from "react";
import styles from "./homePage.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className={styles.myText}>Welcome To Raiyan's Blog</h1>
      {/* <Link href={"/blog"}>Blog</Link> */}
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
};

export default Home;
