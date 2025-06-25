const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function findMissingLetter(list) {
  const inputList = list.map((character) => character.toLowerCase());
  const startCharacter = inputList[0];
  const startIndex = alphabet.indexOf(startCharacter);

  for (let i = startIndex; i < alphabet.length; i++) {
    if (!inputList.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));
