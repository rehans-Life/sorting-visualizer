import { Bar } from "./pages";

export function animate(animations, array, setArray) {
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      let [element1, element2] = animations[i].comparison;
      let newElement1 = new Bar(array[element1].value, "pink");
      array[element1] = newElement1;
      let newElement2 = new Bar(array[element2].value, "pink");
      array[element2] = newElement2;
      // setArray(array);
    }, 10 * i);
  }
}
