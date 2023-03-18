export function animate(animations, array, setArray) {
  let newAnimations = [];

  for (let i = 0; i < animations.length; i++) {
    let animation = animations[i];

    newAnimations.push(animation.comparison);
    newAnimations.push(animation.comparison);
    newAnimations.push(animation.swap);
  }

  for (let i = 0; i < newAnimations.length; i++) {
    setTimeout(() => {
      let newArray = array.slice();
      let instance = newAnimations[i];
      let isColorChange = i % 3 !== 2;

      if (isColorChange) {
        newArray[instance[0]].backgroundColor = i === 0 ? "pink" : "blue";
        newArray[instance[1]].backgroundColor = i === 0 ? "pink" : "blue";
        setArray(newArray);
      } else {
        if (instance.length) {
          newArray[instance[1]].value = newArray[instance[0]].value;
        }
        setArray(newArray);
      }
    }, 10 * i);
  }
}
