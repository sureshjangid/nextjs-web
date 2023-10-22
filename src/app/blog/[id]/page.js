import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  console.log(res, "datadatadata");
  if (!res.ok) {
    return;
  }
  return res.json();
}

const Singleblog = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{"data.username"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg "
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default Singleblog;
