import { Bar } from "../pages";

export const generateRandomArray = (bars, height, ctx) => {
  let arr = [];

  for (let i = 0; i < bars; i++) {
    const element = new Bar(randomNumber(5, height), "white", ctx);
    arr.push(element);
  }

  return arr;
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
