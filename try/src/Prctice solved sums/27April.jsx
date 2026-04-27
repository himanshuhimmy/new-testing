import React from "react";

const April = () => {
  // ! find sum
  function findSum(a, b) {
    for (let i = 0; i < a.length; i++) {
      for (let j = i; j < a.length; j++) {
        if (a[i] + a[j] === b) {
          return console.log(`${a[i]} + ${a[j]} = ${b}`);
        }
      }
    }
  }
  //   findSum([2, 7, 11, 15], 13);

  //   ! group the anagram

  function groupAnagram(a) {
    let letter = {};

    let groups = {};
    a.map((el) => {
      let char = el.split("").sort().join("");

      if (groups[char] === undefined) {
        groups[char] = [el];
      } else {
        groups[char].push(el);
      }
    });
    console.log(Object.values(groups));
  }
  //   groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

  // !  unique char

  function uniqueChar(a) {
    let letter = {};

    for (let i = 0; i < a.length; i++) {
      let char = a.charAt(i);

      if (letter[char] === undefined) {
        letter[char] = 1;
      } else {
        letter[char]++;
      }
    }

    for (const element in letter) {
      if (letter[element] == 1) {
        return console.log(`${element} is unique`);
      }
    }
    return console.log(`no unique`);
  }
  //   uniqueChar("leetcode");

  // ! reverce string

  function reverceString(a) {
    let letter = "";

    for (let i = a.length - 1; i >= 0; i--) {
      let char = a.charAt(i);
      letter += char;
    }
    console.log(letter);
  }
  //   reverceString("Hello");

  return <div>april</div>;
};

export default April;
