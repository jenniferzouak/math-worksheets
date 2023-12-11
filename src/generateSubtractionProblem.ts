/**
 * This function generates a random subtraction problem within the given parameters. The difference will not be less than zero.
 * @param maxTerm Constrains the minuend of the problem to be no larger than this value
 * @param maxTerm2 (optional) Constrains the subtrahend of the problem to be no larger than this value
 * @param avoidBorrowing (optional) Constrains the subtrahend such that borrowing is not necessary
 * @returns PlainText Math string for the generated problem
 */

export function generateSubtractionProblem(
  maxTerm: number,
  maxTerm2: number = -1,
  avoidBorrowing: boolean = false
): string {
  let term1: number, term2: number, difference: number;
  if (maxTerm2 == -1) maxTerm2 = maxTerm;

  // validations
  if (maxTerm < 0 || maxTerm2 < 0) throw 'Invalid max term for substraction';

  do {
    term1 = Math.floor(Math.random() * maxTerm) + 1;
    const tmpMax = Math.min(maxTerm2, term1);
    term2 = Math.floor(Math.random() * tmpMax) + 1;
    difference = term1 - term2;
  } while (avoidBorrowing && hasBorrowing(term1, term2));
  return `${term1} - ${term2} = ${difference}`;

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
}
