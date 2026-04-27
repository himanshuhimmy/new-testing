import React from "react";
import April from "../Prctice solved sums/27April";

const StringQuestions = () => {
  // ! anagram

  function anagram(a, b) {
    if (a.length !== b.length) {
      return console.log("is not an anagram");
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
      if (letter[char] === 0 || letter[char] === undefined) {
        return console.log("is not an anagram");
      } else {
        letter[char]--;
      }
    }
    return console.log("is an anagram");
  }
  //   anagram("car", "rac");

  // ! FIRST UNIQUE CHARACTER

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

    for (let char in letter) {
      if (letter[char] === 1) return char;
    }

    return -1;
  }
  //   console.log(uniqueChar("keetcode"));

  // ! reverse string

  function reveseString(a) {
    let letter = "";

    for (let i = a.length - 1; i >= 0; i--) {
      letter += a.charAt(i);
    }
    console.log(letter);
  }
  // reveseString("hello");

  // !palandrome

  function Palandrome(a) {
    for (let i = 0; i < a.length / 2; i++) {
      if (a.charAt(i) !== a.charAt(a.length - 1 - i)) {
        return console.log("not a apalandrome");
      }
    }
    console.log("is a apalandrome");
  }
  // Palandrome("madam");

  // ! Given a string, find the length of the longest substring without repeating characters.

  function longestSubstring(a) {
    let start = 0;
    let maxLength = 0;
    let seen = {};

    for (let end = 0; end < a.length; end++) {
      let char = a.charAt(end);

      if (seen[char] !== undefined && seen[char] >= start) {
        start = seen[char] + 1;
      }
      seen[char] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }

    return console.log(maxLength);
  }
  // longestSubstring("pwwkew");

  // ! Given an array of strings, group the anagrams together.

  function groupAnagram(p) {
    let groups = {};

    p.map((str) => {
      let sortedKey = str.split("").sort().join("");

      if (groups[sortedKey] === undefined) {
        groups[sortedKey] = [str];
      } else {
        groups[sortedKey].push(str);
      }
    });

    console.log(Object.values(groups));
  }
  // groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

  // !  Two Sum

  function findSum(a, b) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 1; j < a.length; j++) {
        if (a[i] + a[j] === b) {
          console.log(`${a[i]} + ${a[j]} = ${b}`);
        }
      }
    }
  }
  // findSum([2, 7, 11, 15], 13);

  // !  Longest Palindromic Substring

  function longestPalindrome(p) {
    let longest = "";

    function expand(left, right) {
      while (
        left >= 0 &&
        right < p.length &&
        p.charAt(left) === p.charAt(right)
      ) {
        left--;
        right++;
      }
      let current = p.slice(left + 1, right);
      if (current.length > longest.length) {
        longest = current;
      }
    }

    for (let i = 0; i < p.length; i++) {
      expand(i, i);
      expand(i, i + 1);
    }

    return console.log(longest);
  }

  longestPalindrome("cbbd"); // "bb"
  longestPalindrome("babad"); // "bab"

  return (
    <div>
      <April />
      string
    </div>
  );
};

export default StringQuestions;
