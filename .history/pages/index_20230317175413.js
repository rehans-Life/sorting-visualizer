import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Element from "../components/Element";
import styles from "../styles/Home.module.css";

export default function Home() {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const generateRandomArray = (bars) => {
    let arr = [];

    for (let i = 0; i < bars; i++) {
      arr.push(randomNumber(5, 730));
    }

    return arr;
  };

  const [array, setArray] = useState([]);
  const [bars, setBars] = useState(0);
  const arrRef = useRef();

  useEffect(() => {
    const findBars = () => {
      let width = arrRef.current.clientWidth;
      let bars = Math.floor(width / 4);
      setBars(bars);
    };
    window.onresize = findBars;
    findBars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setArray(generateRandomArray(bars));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bars]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={arrRef} className={styles.array}>
        {array.map((number, index) => (
          <Element key={index} number={number} />
        ))}
      </div>
    </div>
  );
}
