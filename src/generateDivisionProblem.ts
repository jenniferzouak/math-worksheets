/**
 * This function generates a random division problem within the given parameters. The difference will not be imaginary.
 * @param maxDividend Constrains the dividen of the problem to be no larger than this value
 * @param avoidRemainder (optional) Constrains the divisor such that a remainder is not needed
 * @returns PlainText Math string for the generated problem
 */

export function generateDivisionProblem(
  maxDividend: number,
  avoidRemainder: boolean = false
): string {
  let term1: number, term2: number, quotient: number, remainder: number = 0;

  do {
    term1 = Math.floor(Math.random() * maxDividend) + 1;
    term2 = Math.floor(Math.random() * term1) + 1; // +1 here means we avoid divide by zero, subtracting 1 from the term means we avoid dividing a number by itself with result of 1 (except when the dividend itself is 1)
    quotient = term1 / term2;
  } while (avoidRemainder && quotient != Math.floor(quotient));

  if (avoidRemainder) {
    return `${term1} ÷ ${term2} = ${quotient}`;
  }

  // show remainder
  if (quotient != Math.floor(quotient)) {
    remainder = term1 % term2;
    quotient = Math.floor(quotient);
    return `${term1} ÷ ${term2} = ${quotient} R${remainder}`;
  } else {
    return `${term1} ÷ ${term2} = ${quotient}`;
  }
}
