export function bitStringOccurrences(input: string): BitCounts[] {
  const lines = input.split('\n');
  const columns = lines[0].length;
  const bitCounts = new Array(columns).fill(0).map(() => ({ '0': 0, '1': 0 }));
  lines.forEach((line) => {
    line.split('').forEach((bitVal, index) => {
      bitCounts[index][bitVal] += 1;
    });
  });
  return bitCounts;
}

export function getNumberBasedOnMostBitReduction(input: string): number {
  let lines = input.split('\n');
  const columns = lines[0].length;
  for (let column = 0; column < columns; column++) {
    const columnCount = getRowNumbersOfBits(lines, column);
    let indicesToKeep: number[] = [];
    if (columnCount.rowNumberOfOnes.length >= columnCount.rowNumberOfZeroes.length) {
      indicesToKeep = columnCount.rowNumberOfOnes;
    } else {
      indicesToKeep = columnCount.rowNumberOfZeroes;
    }
    lines = lines.filter((val, index) => {
      return indicesToKeep.includes(index);
    });
    if (lines.length == 1) {
      return parseInt(lines[0], 2);
    }
  }
  throw new Error(`Could not reduce list, had ${lines} left`);

}


export function getNumberBasedOnLeastBitReduction(input: string): number {
  let lines = input.split('\n');
  const columns = lines[0].length;
  for (let column = 0; column < columns; column++) {
    const columnCount = getRowNumbersOfBits(lines, column);
    let indicesToKeep: number[] = [];
    console.log(lines);
    console.log(columnCount);
    if (columnCount.rowNumberOfZeroes.length <= columnCount.rowNumberOfOnes.length) {
      indicesToKeep = columnCount.rowNumberOfZeroes;
    } else {
      indicesToKeep = columnCount.rowNumberOfOnes;
    }
    lines = lines.filter((val, index) => {
      return indicesToKeep.includes(index);
    });
    if (lines.length == 1) {
      console.log(lines);
      return parseInt(lines[0], 2);
    }
  }
  throw new Error(`Could not reduce list, had ${lines} left`);

}

export function getRowNumbersOfBits(lines: string[], column: number): RowBasedBitCounts {
  const rows = lines.length;
  const columnCount = {
    rowNumberOfZeroes: [],
    rowNumberOfOnes: []
  };
  for (let row = 0; row < rows; row++) {
    if (lines[row].charAt(column) == '1') {
      columnCount.rowNumberOfOnes.push(row);
    } else {
      columnCount.rowNumberOfZeroes.push(row);
    }
  }
  return columnCount;
}

export function getCo2TimesOxygenRating(input: string): number {
  const c02Rating = getNumberBasedOnLeastBitReduction(input);
  const oxygenRating = getNumberBasedOnMostBitReduction(input);
  return c02Rating * oxygenRating;
}

export function getMostCommonBitString(counts: BitCounts[]): string {
  const bitStr = counts
    .map((bitCount) => {
      if (bitCount[0] > bitCount[1]) {
        return '0';
      }
      return '1';
    })
    .join('');
  return bitStr;
}

export function getLeastCommonBitString(counts: BitCounts[]): string {
  const bitStr = counts
    .map((bitCount) => {
      if (bitCount[0] > bitCount[1]) {
        return '1';
      }
      return '0';
    })
    .join('');
  return bitStr;
}


export function getGammaRateTimesEpsilonRate(input: string): number {
  const result = bitStringOccurrences(input);
  const leastCommonBitStr = getLeastCommonBitString(result);
  const mostCommonBitStr = getMostCommonBitString(result);
  return parseInt(leastCommonBitStr, 2) * parseInt(mostCommonBitStr, 2);
}

interface BitCounts {
  '0': number;
  '1': number;
}

interface RowBasedBitCounts {
  rowNumberOfZeroes: number[];
  rowNumberOfOnes: number[];
}
