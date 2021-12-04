import { getFileContents } from '../fileReader/read';
import {
  bitStringOccurrences, getCo2TimesOxygenRating, getGammaRateTimesEpsilonRate, getLeastCommonBitString,
  getMostCommonBitString, getNumberBasedOnLeastBitReduction, getNumberBasedOnMostBitReduction, getRowNumbersOfBits
} from './day3';

const sampleInput = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

describe('get the most and least common bits', () => {
  it('bit tokenizing', () => {
    const result = bitStringOccurrences(sampleInput);
    expect(result[0]).toEqual({
      '0': 5, '1': 7,
    });
  });
  it('most common bits', () => {
    const result = bitStringOccurrences(sampleInput);
    const mostCommonBitStr = getMostCommonBitString(result);
    expect(mostCommonBitStr).toBe('10110');
  });

  it('least common bits', () => {
    const result = bitStringOccurrences(sampleInput);
    const leastCommonBitStr = getLeastCommonBitString(result);
    expect(leastCommonBitStr).toBe('01001');
  });
});

describe('epsilon and gamma rate', () => {
  it('sample input', () => {
    const result = getGammaRateTimesEpsilonRate(sampleInput);
    expect(result).toBe(198);
  });
  it('part one', () => {
    const input = getFileContents('input_day3.txt');
    const result = getGammaRateTimesEpsilonRate(input);
    expect(result).toBe(4160394);
  });
});

describe('getRowNumbersOfBits', () => {

  it('can correctly count the first column of the sample inputt', () => {
    const result = getRowNumbersOfBits(sampleInput.split('\n'), 0);
    expect(result).toEqual({ "rowNumberOfZeroes": [0, 5, 6, 10, 11], "rowNumberOfOnes": [1, 2, 3, 4, 7, 8, 9] });
  });

});

describe('part 2, get the oxygen and co2 ratings', () => {
  it('can get the oxygen rating from the sample input', () => {
    const result = getNumberBasedOnMostBitReduction(sampleInput);
    expect(result).toBe(23);
  });

  it('can get the co2 from the sample input', () => {
    const result = getNumberBasedOnLeastBitReduction(sampleInput);
    expect(result).toBe(10);
  });

  it('can get the product of both correct', () => {
    const result = getCo2TimesOxygenRating(sampleInput);
    expect(result).toBe(230);
  });


  it('can get the part II answer', () => {
    const input = getFileContents('input_day3.txt');
    const result = getCo2TimesOxygenRating(input);
    expect(result).toBe(4125600);
  });
});
