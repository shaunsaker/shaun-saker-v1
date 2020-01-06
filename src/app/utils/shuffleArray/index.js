/*
 * Adapted from: https://stackoverflow.com/a/12646864/7956924
 */
const shuffleArray = (array) => {
  const newArray = array;

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [array[j], array[i]];
  }

  return newArray;
};

export { shuffleArray };

export default shuffleArray;
