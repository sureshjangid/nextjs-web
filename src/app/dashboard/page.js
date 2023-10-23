"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data, "suresh");
  return <div className={styles.container}>dash</div>;
};

export default Dashboard;
