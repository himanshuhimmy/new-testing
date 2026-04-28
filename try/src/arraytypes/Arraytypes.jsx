import React from "react";

const Arraytypes = () => {
  // ! most profit

  function checkProfit(a) {
    let minPrice = a[0];
    let maxProfit = 0;
    let buyday = 0;
    let sellDay = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] < minPrice) {
        minPrice = a[i];
        buyday = i + 1;
      }
      if (a[i] - minPrice > maxProfit) {
        maxProfit = a[i] - minPrice;
        sellDay = i + 1;
      }
    }
    console.log(
      `to buy at day ${buyday} at ${minPrice} and cell on day ${sellDay} max profit is ${maxProfit}`,
    );
  }
  //   checkProfit([7, 1, 5, 3, 6, 4]);

  // ! max sub array

  function subArray(a) {
    let currentSum = 0;
    let maxSum = 0;

    for (let i = 0; i < a.length; i++) {
      currentSum = Math.max(a[i], currentSum + a[i]);
      maxSum = Math.max(currentSum, maxSum);
    }
    console.log(maxSum);
  }
  //   subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

  //   !  Product of Array Except Self

  function productOfSelf(a) {
    let output = [];

    for (let i = 0; i < a.length; i++) {
      let Product = 1;

      for (let j = 0; j < a.length; j++) {
        if (i !== j) {
          Product = Product * a[j];
        }
      }
      output.push(Product);
    }

    console.log(output);
  }
  //   productOfSelf([2, 3, 4, 5]);

  // ! find the misssng no

  //   ? my solution it works for multiple missing
  function FindTHeMissingNo(a) {
    let sorted = a.sort();
    let misssngnos = [];

    sorted.map((num) => {
      if (!sorted.includes(num + 1) && num + 1 <= sorted.length) {
        misssngnos.push(num + 1);
      }
    });
    console.log(misssngnos);
  }
  //   FindTHeMissingNo([9, 4, 3, 5, 7, 0, 1]);

  // ? claude solution works for single missiing
  function missingNumber(a) {
    let n = a.length;
    let expected = (n * (n + 1)) / 2; // sum formula
    let actual = a.reduce((sum, num) => sum + num, 0);
    return console.log(expected - actual);
  }

  //   missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

  //   !  Given an array, rotate it to the right by k steps.

  function SortK(a, b) {
    let part1 = a.slice(0, a.length - b);
    let part2 = a.slice(a.length - b);

    console.log(part2.concat(part1));
  }
  SortK([1, 2, 3, 4, 5, 6, 7], 3);

  //! flat array without flat
  function withoutFlat(a) {
    let flatArray = [];

    a.map((num) => {
      if (Array.isArray(num)) {
        flatArray = flatArray.concat(withoutFlat(num));
      } else {
        flatArray.push(num);
      }
    });

    return flatArray;
  }
  console.log(withoutFlat([1, [2, [3, [4]]]]));

  return <div>array</div>;
};

export default Arraytypes;
