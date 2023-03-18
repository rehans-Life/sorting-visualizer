export function animate(animations, array, setArray) {
  let newAnimations = [];

  for (let i = 0; i < animations.length; i++) {
    let { comparison, swap } = animations[i];
    newAnimations.push(comparison);
    newAnimations.push(comparison);
    newAnimations.push(swap);
  }

  for (let i = 0; i < newAnimations.length; i++) {
    setTimeout(() => {
      let newArray = array.slice();
      let instance = newAnimations[i];
      let isColorChange = i % 3 !== 2;

      if (isColorChange) {
        newArray[instance[0]].backgroundColor = i % 3 === 0 ? "pink" : "blue";
        newArray[instance[1]].backgroundColor = i % 3 === 0 ? "pink" : "blue";
      } else {
        if (instance.length) {
          newArray[instance[0]].value = newArray[instance[1]].value;
        }
      }
      setArray(newArray);
    }, 10 * i);
  }
}
