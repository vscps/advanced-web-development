function sortStringByNumber(stringObject) {
  const wordList = stringObject.split(" ");
  const wordsWithPositions = [];
  for (word of wordList) {
    for (character of word) {
      if (!isNaN(character)) {
        wordsWithPositions.push({
          ["word"]: word,
          ["position"]: parseInt(character),
        });
      }
    }
  }
  wordsWithPositions.sort((a, b) => a.position - b.position);
  let result = "";
  for (word of wordsWithPositions) {
    result = result + word.word + " ";
  }
  return result;
}

console.log(sortStringByNumber("F4of Fo1r pe6ople g3ood th5e the2"));
