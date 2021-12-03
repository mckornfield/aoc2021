import { countIncreases, countIncreasesSlidingWindow } from './day1';
import { getFileContents } from '../fileReader/read';

describe('test count function', () => {
  it('should return 7 for the sample data', () => {
    const input = `199
200
208
210
200
207
240
269
260
263`;
    expect(countIncreases(input)).toBe(7);
  });

  it('should return the answer for the sample data', () => {
    const input = getFileContents('input_day1.txt');
    expect(countIncreases(input)).toBe(1692);
  });
});

describe('test countIncreasesSlidingWindow function', () => {
  it('should return 5 for the sample data', () => {
    const input = `199
200
208
210
200
207
240
269
260
263`;
    expect(countIncreasesSlidingWindow(input)).toBe(5);
  });
});

describe('test countIncreasesSlidingWindow function', () => {
  it('should return 5 for the sample data', () => {
    const input = getFileContents('input_day1.txt');
    expect(countIncreasesSlidingWindow(input)).toBe(1724);
  });
});
