import { pilotShip, pilotShipWithAim } from './day2';
import { getFileContents } from '../fileReader/read';

describe('navigate function', () => {
  it('moves down to 15/10, returns 150', () => {
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    expect(pilotShip(input)).toBe(150);
  });

  it('part one complete', () => {
    const input = getFileContents('input_day2.txt');
    expect(pilotShip(input)).toBe(1670340);
  });
});

describe('navigate function part 2', () => {
  it('moves down to 15/60, returns 900', () => {
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    expect(pilotShipWithAim(input)).toBe(900);
  });
});

describe('navigate function part 2', () => {
  it('moves down to 15/60, returns 900', () => {
    const input = getFileContents('input_day2.txt');
    expect(pilotShipWithAim(input)).toBe(1954293920);
  });
});
