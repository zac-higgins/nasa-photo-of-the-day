import React from "react";

const date = new Date();

function yearElement() {
  return date.getFullYear();
}

function monthElement() {
  if (date.getMonth() + 1 >= 10) {
    return date.getMonth() + 1;
  } else if (date.getMonth() + 1 < 10) {
    return `0${date.getMonth() + 1}`;
  }
}

function dayElement(arg) {
  if (date.getDate() - arg >= 10) {
    return date.getDate() - arg;
  } else if (date.getDate() - arg < 10) {
    return `0${date.getDate() - arg}`;
  }
}

function Day(arg) {
  return `${yearElement()}-${monthElement()}-${dayElement(arg)}`;
}

const today = Day(0);
const yesterday = Day(1);
const dayBefore = Day(2);
const threeDaysAgo = Day(3);
const fourDaysAgo = Day(4);


export { today, yesterday, dayBefore, threeDaysAgo, fourDaysAgo }
