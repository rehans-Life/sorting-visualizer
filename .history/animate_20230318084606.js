import { Bar } from "./pages";

export function animate(animations, array, setArray) {
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      let newArray = array.slice();
      let [element1, element2] = animations[i].comparison;
      let newElement1 = new Bar(array[element1].value, "pink");
      newArray[element1] = newElement1;
      let newElement2 = new Bar(array[element2].value, "pink");
      newArray[element2] = newElement2;
      setArray(newArray);
    }, 10 * i);
  }
}
