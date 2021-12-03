export function pilotShip(input: string): number {
  const coordinates: Coordinates = { x: 0, y: 0, aim: 0 };
  input.split('\n').forEach((line) => moveByInstruction(coordinates, line));
  return coordinates.x * coordinates.y;
}

export function pilotShipWithAim(input: string): number {
  const coordinates: Coordinates = { x: 0, y: 0, aim: 0 };
  input
    .split('\n')
    .forEach((line) => moveByInstructionWithAim(coordinates, line));
  return coordinates.x * coordinates.y;
}

function moveByInstruction(coordinates: Coordinates, line: string) {
  const [direction, magnitudeStr] = line.split(' ');
  const magnitude = parseInt(magnitudeStr);
  switch (direction) {
    case 'up':
      coordinates.y -= magnitude;
      break;
    case 'down':
      coordinates.y += magnitude;
      break;
    case 'forward':
      coordinates.x += magnitude;
      break;
  }
}

function moveByInstructionWithAim(coordinates: Coordinates, line: string) {
  const [direction, magnitudeStr] = line.split(' ');
  const magnitude = parseInt(magnitudeStr);
  switch (direction) {
    case 'up':
      coordinates.aim -= magnitude;
      break;
    case 'down':
      coordinates.aim += magnitude;
      break;
    case 'forward':
      coordinates.x += magnitude;
      coordinates.y += magnitude * coordinates.aim;
      break;
  }
}

interface Coordinates {
  x: number;
  y: number;
  aim: number;
}
