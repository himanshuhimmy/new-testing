import React from "react";

const PracticeSums = () => {
  let findMax = [3, 1, 4, 1, 5, 9, 2, 6];

  let max = findMax[0];
  findMax.forEach((num) => {
    if (max < num) {
      max = num;
    }
  });

  // console.log(`man no is ${max}`);

  // ! palandrme

  function palandrome(a) {
    for (let i = 0; i < a.length / 2; i++) {
      if (a.charAt(i) !== a.charAt(a.length - 1 - i)) {
        return console.log("is not a palandrome");
      }
    }
    return console.log("is a palandrome");
  }
  // palandrome("racecar");

  // ! higest occring character
  function maxChar(a) {
    let letter = {};

    for (let i = 0; i < a.length; i++) {
      let word = a.charAt(i);
      if (letter[word] === undefined) {
        letter[word] = 1;
      } else {
        letter[word]++;
      }
    }

    let maxCount = 0;
    let maxCharacter = "";

    for (let char in letter) {
      if (letter[char] > maxCount) {
        maxCount = letter[char];
        maxCharacter = char;
      }
    }

    return console.log(maxCharacter);
  }
  // maxChar("mississippi");

  // ! removr dublicate
  let DubArray = ["a", "b", "a", "c", "b"];

  let ans = [...new Set(DubArray)];
  // ? to keep in array spred oprater used
  // console.log(ans);

  // wihout set?
  function removeDup() {
    let char = {};
    let result = [];
    DubArray.forEach((arr) => {
      console.log(arr);
      if (!char[arr]) {
        char[arr] = true;
        result.push(arr);
      }
    });
    console.log(result);
  }
  // removeDup();

  // ! flat the array

  let falt1 = [1, [2, 3], [4, [5, 6]]];

  function flatten(arr) {
    let newArray = falt1.flat(Infinity);
    console.log(newArray);
  }
  // flatten();

  // ! is anagram
  function isAnagram(a, b) {
    if (a.length !== b.length) {
      return console.log("not an anagram");
    }

    let letter = {};

    for (let i = 0; i < a.length; i++) {
      let char = a.charAt(i);
      if (letter[char] === undefined) {
        letter[char] = 1;
      } else {
        letter[char]++;
      }
    }

    for (let i = 0; i < b.length; i++) {
      let char = b.charAt(i);
      if (letter[char] === undefined) {
        return console.log("not an anagram");
      } else {
        letter[char]--;
      }
    }
    return console.log("is an anagram");
  }

  // isAnagram("listen", "silent");

  // !add index

  function twoSum(a, b) {
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] + a[j] === b) {
          return console.log(`${a[i]} = ${a[j]} = ${b} `);
        }
      }
    }
  }
  // twoSum([2, 7, 11, 15], 9);

  // ! capitalize first letter of each

  function capitalize(a) {
    let newArray = a.split(` `);

    let result = newArray.map(
      (char) => char.charAt().toUpperCase() + char.slice(1),
    );

    result.join(" ");
    console.log(result);
  }
  // capitalize("the quick brown fox");

  // ! find the dublicate of

  function findDuplicates(p) {
    let repeatedValues = [];
    let check = {};

    p.map((arr) => {
      if (check[arr] === undefined) {
        check[arr] = 1;
      } else {
        repeatedValues.push(arr);
      }
    });

    console.log(repeatedValues);
  }

  // findDuplicates([1, 2, 3, 2, 4, 3, 5]);

  // ! sort data

  function groupBy(data) {
    let finalData = { admin: [], user: [] };

    data.map((el) => {
      if (el.role === "admin") {
        finalData.admin.push(el);
      } else {
        finalData.user.push(el);
      }
    });
    console.log(finalData);
  }

  // groupBy(
  //   [
  //     { name: "Himanshu", role: "admin" },
  //     { name: "Jevik", role: "user" },
  //     { name: "Raj", role: "admin" },
  //     { name: "Sam", role: "user" },
  //   ],
  //   "role",
  // );

  // ! SECOND MOST FREQUENT character

  function secondMostFrequent(a) {
    let letter = {};

    for (let i = 0; i < a.length; i++) {
      let char = a.charAt(i);
      if (letter[char] === undefined) {
        letter[char] = 1;
      } else {
        letter[char]++;
      }
    }

    let firstMax = 0,
      secondMax = 0;
    let firstChar = "",
      secondChar = "";

    for (let chars in letter) {
      if (letter[chars] > firstMax) {
        secondMax = firstMax;
        secondChar = firstChar;

        firstMax = letter[chars];
        firstChar = chars;
      } else if (letter[chars] > secondMax) {
        secondMax = letter[chars];
        secondChar = [chars];
      }
      console.log(
        `max char is ${firstChar} for ${firstMax} times & second max is ${secondChar} for ${secondMax} times`,
      );
    }
  }

  secondMostFrequent("yaaass");

  return <div>aa</div>;
};

export default PracticeSums;
