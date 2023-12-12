/**
 * This function generates a random division problem within the given parameters. The difference will not be imaginary.
 * @param maxDividend Constrains the dividen of the problem to be no larger than this value
 * @param avoidRemainder (optional) Constrains the divisor such that a remainder is not needed
 * @returns PlainText Math string for the generated problem
 */

import { generateRandomTerm } from './generateRandomTerm.js';

export function generateDivisionProblem(
  divisormax: number = 12, // dividend
  quotientmax: number = 12, // quotient
  divisormin: number = 1,
  quotientmin: number = 1,
  avoidRemainder: boolean = false,
): string {
  let divisor = generateRandomTerm(divisormin, divisormax);
  let quotient = generateRandomTerm(quotientmin, quotientmax);
  let dividend = divisor * quotient;

  if (avoidRemainder) {
    return `${dividend} ÷ ${divisor} = ${quotient}`;
  }

  // else remainder
  const remainder = generateRandomTerm(0, divisor - 1);
  return `${(dividend+remainder)} ÷ ${divisor} = ${(quotient)} R${remainder}`;
}
