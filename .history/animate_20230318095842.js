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
      let [element1,element2] = newAnimations[i]
      let isColorChange = i % 3 !== 2;

      if (isColorChange) {
        newArray[element1].backgroundColor = i === 0 ? 'pink' ? 'blue'
      }
    }, 5 * i);
  }
}
