import { generateRandomTerm } from './generateRandomTerm.js';

/**
 * This function generates a random addition problem within the given parameters
 * @param maxResult Constrains the sum of the problem to be no larger than than this value
 * @param avoidCarryover (optional) Constrains the addends such that carry over is not necessary
 * @returns PlainText Math string for the generated problem
 */
export function generateAdditionProblem(
  term1max: number = 50,
  term2max: number = 49,
  term1min: number = 0,
  term2min: number = 0,
  avoidCarryover: boolean = false,
): string {
  // validations
  if (term1min > term1max)
    throw 'invalid min value, it must be less that the max';
  if (term2min > term2max)
    throw 'invalid min value, it must be less that the max';

  let term1: number, term2: number, sum: number;

  do {
    term1 = generateRandomTerm(term1min, term1max);
    term2 = generateRandomTerm(term2min, term2max);
    sum = term1 + term2;
  } while (avoidCarryover && hasCarryOver(term1, term2));
  return `${term1} + ${term2} = ${sum}`;
}

function hasCarryOver(term1: number, term2: number): boolean {
  const term1Array: number[] = Array.from(term1.toString()).map(Number);
  const term2Array: number[] = Array.from(term2.toString()).map(Number);

  for (let i = 1; i < 1 + Math.min(term1Array.length, term2Array.length); i++) {
    const digit1 = term1Array[term1Array.length - i];
    const digit2 = term2Array[term2Array.length - i];
    if (digit1 + digit2 >= 10) {
      return true;
    }
  }
  return false;
}

export const exportedForTesting = {
  hasCarryOver,
};
