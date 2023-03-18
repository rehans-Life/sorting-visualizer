export function animate(animations, array, setArray) {
  let newAnimations = [];

  for (let i = 0; i < animations.length; i++) {
    let { comparison, rotate } = animations[i];
    newAnimations.push(comparison);
    newAnimations.push(comparison);
    newAnimations.push(rotate);
  }

  for (let i = 0; i < newAnimations.length; i++) {
    setTimeout(() => {
      let newArray = array.slice();
      let instance = newAnimations[i];
      let isColorChange = i % 3 !== 2;

      if (isColorChange) {
        newArray[instance[0]].backgroundColor = i % 3 === 0 ? "pink" : "blue";
        newArray[instance[1]].backgroundColor = i % 3 === 0 ? "pink" : "blue";
        setArray(newArray);
      } else {
        if (instance.length) {
          for (let i = 0; i < instance.length; i++) {
            const elementIndex = instance[i];
          }
        }
      }
    }, 10 * i);
  }
}
