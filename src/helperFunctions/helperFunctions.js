const formatItemCount = (num) => {
    const numArrReversed = num.toString().split("").reverse();
    numArrReversed.splice(3, 0, ",")
    return numArrReversed.reverse().join("")
}

export {
    formatItemCount,
}