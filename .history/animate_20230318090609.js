export function animate(animations, array, setArray) {
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      let newArray = array.slice();
      let [element1, element2] = animations[i].comparison;
      newArray[element1].backgroundColor = "pink";
      newArray[element2].backgroundColor = "pink";
      setArray(newArray);
    }, 10 * i);
  }
}
