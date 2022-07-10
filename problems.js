const sumZero = (newArray) => {
  let wumbo = false;
  for (let x = 0; x < newArray.length; x++) {
    for (let y = 0; y < newArray.length; y++) {
      if (newArray[x] + newArray[y] === 0) {
        wumbo = true;
        return wumbo;
      } else wumbo = false;
    }
  }
  return wumbo;
};

//console.log(sumZero([1, 2, 3, 4, 5, 6, 9, -9]));

const charString = (string) => {
  let newString = new Set([]);
  for (let x = 0; x < string.length; x++) {
    newString.add(string[x]);
  }

  return newString.size === string.length;
};

//console.log(charString("uncopyrightable"));

const panSent = (sentence) => {
  let alphabet = /([a-z])(?!.*\1)/g;
  let lowercase = sentence.toLowerCase();
  let wumbos = lowercase.match(alphabet);
  if (wumbos.length === 26) {
    return true;
  } else return false;
};

//console.log(panSent("The quick brown fox jumps over the lazy dog!"));

const longWord = (myArray) => {
  let newThing = 0;
  for (let x = 0; x < myArray.length; x++) {
    if (myArray[x].length > newThing) {
      newThing = myArray[x].length;
    }
  }
  return newThing;
};

//console.log(longWord(["big", "ginormous"]));
