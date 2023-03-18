export function animate(animations, array, setArray) {
  let newAnimations = [];

  for (let i = 0; i < animations.length; i++) {
    let animation = animations[i];

    for (let i = 0; i < 3; i++) {}
  }

  for (let i = 0; i < newAnimations.length; i++) {
    setTimeout(() => {
      let newArray = array.slice();
      let [element1, element2] = animations[i].comparison;
      setTimeout(() => {
        newArray[element1].backgroundColor = "pink";
        newArray[element2].backgroundColor = "pink";
        setArray(newArray);
      }, 50 * i);
      setTimeout(() => {
        newArray[element1].backgroundColor = "blue";
        newArray[element2].backgroundColor = "blue";
        setArray(newArray);
      }, 50 * (i + 1));
    }, 50 * i + 50 * (i + 1));
  }
}
