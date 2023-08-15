import React from "react";
import Link from "next/Link";
import styles from "./homePage.module.css";

const Home = () => {
  return (
    <div>
      <h1 className={styles.myText}>Welcome To Raiyan's Blog</h1>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
};

export default Home;
