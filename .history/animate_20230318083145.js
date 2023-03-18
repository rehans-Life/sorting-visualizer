export function animate(animations, array, setArray) {
  for (let i = 0; i < animations.length; i++) {
    let newArray = array.slice();
    let [element1, element2] = animations[i].comparison;
    let newElement = new Bar(array[element1].value, "pink");
  }
}
