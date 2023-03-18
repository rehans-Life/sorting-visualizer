import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const generateRandomArray = () => {
    let arr = [];

    for (let i = 5; i < 360; i++) {
      arr.push(randomNumber(5, 360));
    }

    return arr;
  };

  console.log(generateRandomArray());

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
