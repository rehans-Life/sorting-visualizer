export const copy = (array) => {
  let copyArray = [];
  for (let i = 0; i < array.length; i++) {
    copyArray.push(JSON.parse(JSON.stringify(array[i])));
  }
  return copyArray;
};
