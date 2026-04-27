import React, { useRef, useState } from "react";

const Test = () => {
  // !stopwatch
  let timer = useRef();
  let [watch, setWatch] = useState(0);

  function handleStart() {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setWatch((prev) => prev + 1);
    }, 1000);
  }

  function handlePause() {
    // setWatch(watch);
    clearInterval(timer.current);
    timer.current = null;
  }

  function handleReset() {
    setWatch(0);
    clearInterval(timer.current);
    timer.current = null;
  }

  // ! second largest no

  function secondLargest(a) {
    let heigest = 0;
    let second = 0;

    a.map((num) => {
      if (num > heigest) {
        second = heigest;
        heigest = num;
      } else if (num > second) {
        second = num;
      }
    });

    console.log(`${heigest} no is heigest & second heigest is ${second}`);
  }

  //   secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 1]);

  // ! string reverce

  function reverseString(a) {
    let reverse = "";
    for (let i = a.length - 1; i >= 0; i--) {
      reverse += a[i];
    }
    console.log(reverse);
  }
  //   reverseString("hello");

  //  ! prime

  function prime(a) {
    if (a <= 1) return console.log(`not a prime`);

    for (let i = 2; i < a; i++) {
      if (i % 2 === 0) {
        return console.log(`not a prime`);
      }
    }
    return console.log(`is a prime`);
  }
  prime(200);

  return (
    <div>
      {watch}

      <div>
        <button onClick={handleStart}> start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default Test;
