import { generateRandomTerm } from './generateRandomTerm.js';

/**
 * This function generates a random subtraction problem within the given parameters. The difference will not be less than zero.
 * @param maxTerm Constrains the minuend of the problem to be no larger than this value
 * @param maxTerm2 (optional) Constrains the subtrahend of the problem to be no larger than this value
 * @param avoidBorrowing (optional) Constrains the subtrahend such that borrowing is not necessary
 * @returns PlainText Math string for the generated problem
 */
export function generateSubtractionProblem(
  term1max: number = 99,
  term2max: number = 99,
  term1min: number = 0,
  term2min: number = 0,
  avoidBorrowing: boolean = false,
  avoidNegatives: boolean = true,
): string {
  let term1: number, term2: number, difference: number;

  // validations
  if (term1min > term1max)
    throw 'invalid min value, it must be less that the max';
  if (term2min > term2max)
    throw 'invalid min value, it must be less that the max';
  if (avoidNegatives && (term2min > term1min || term1min < 0 || term2min < 0))
    throw 'cannot use avoidNegatives if negative terms are in the allowed range nor when second term could be larger than the first';
  if (avoidNegatives == false && avoidBorrowing == true) {
    avoidBorrowing = false;
  }

  do {
    term1 = generateRandomTerm(term1min, term1max);
    let term2NewMax = term2max;
    if (avoidNegatives) {
      term2NewMax = Math.min(term1, term2max);
    }
    term2NewMax = Math.max(term2NewMax, term2min);

    term2 = generateRandomTerm(term2min, term2NewMax);
    difference = term1 - term2;
  } while (avoidBorrowing && hasBorrowing(term1, term2));
  return `${term1} - ${term2} = ${difference}`;
}

function hasBorrowing(term1: number, term2: number): boolean {
  const term1Array: number[] = Array.from(term1.toString()).map(Number);
  const term2Array: number[] = Array.from(term2.toString()).map(Number);

  for (let i = 1; i < term1Array.length + 1; i++) {
    const digit1 = term1Array[term1Array.length - i];
    const digit2 = term2Array[term2Array.length - i];

    if (digit1 < digit2) {
      return true;
    }
  }
  return false;
}

export const exportedForTesting = {
  hasBorrowing,
};
