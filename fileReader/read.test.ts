import { getFileContents, getFileContentsAsArray } from './read';
import path from 'path';

describe('read.ts', () => {
  it('can read a file', () => {
    expect(getFileContents('sample.txt')).toBe('1\n2\n3\n');
  });
  it('can read a file into an array', () => {
    expect(getFileContentsAsArray('sample.txt')).toEqual(['1', '2', '3', '']);
  });
});
