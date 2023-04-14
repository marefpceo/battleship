const Ship = (size) => {
  const length = size;
  let hitCount = 0;
  let sunk = false;

  const hit = () => {hitCount += 1;};

  const isSunk = () => {length === hitCount ? sunk = true : sunk = false;}

  return {
    get hits() {
      return hitCount;
    },
    get sunkStatus() {
      return sunk;
    },
    length, hit, isSunk
  }
}

export {Ship};
