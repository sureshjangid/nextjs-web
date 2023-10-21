import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into Reality. WE bring together the teams from glbal tech industry.</p>
        <Button text={'See Our Work'} url="portfolio" />
      </div>
      <div className={styles.item}>
        <Image width={500} height={500} src={Hero} />
      </div>
    </div>
  );
}
