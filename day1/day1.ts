export function countIncreases(input: string): Number {
  const items = input.split('\n');
  let count = 0;
  for (let i = 1; i < items.length; i++) {
    const previous = parseInt(items[i - 1]);
    const current = parseInt(items[i]);
    if (current > previous) {
      count++;
    }
  }
  return count;
}

export function countIncreasesSlidingWindow(input: string): Number {
    const items = input.split('\n');
    let count = 0;
    for (let i = 3; i < items.length; i++) {
      const threePrevious = parseInt(items[i - 3]);
      const twoPrevious = parseInt(items[i - 2]);
      const previous = parseInt(items[i - 1]);
      const current = parseInt(items[i]);

      const firstWindow = threePrevious + twoPrevious + previous
      const secondWindow = twoPrevious + previous + current
      if (secondWindow > firstWindow) {
        count++;
      }
    }
    return count;
  }
