const formatItemCount = (num) => {
  if (num > 999) {
    const numArrReversed = num.toString().split("").reverse();
    numArrReversed.splice(3, 0, ",");
    return numArrReversed.reverse().join("");
  }
  return num;
};

export { formatItemCount };
