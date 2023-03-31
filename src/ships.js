const Ship = (size) => {
  const length = size;
  let hitCount = 0;
  let sunk = false;

  const hit = () => {
    hitCount += 1;
  };

  const isSunk = () => {
    if (length === hitCount) {
      sunk = true;
    } else {
      sunk = false;
    }
  }

  return {
    get hits() {
      return hitCount;
    },
    get status() {
      return sunk;
    },
    length,
    hit,
    isSunk
  }
}

export {Ship};