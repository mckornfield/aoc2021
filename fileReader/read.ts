import fs from 'fs';
import path from 'path';

export function getFileContents(filePath: string): string {
  return fs.readFileSync(path.join(__dirname, filePath)).toString();
}

export function getFileContentsAsArray(filePath: string): string[] {
  return fs.readFileSync(path.join(__dirname, filePath)).toString().split('\n');
}
