import { generateRandomTerm } from "./generateRandomTerm.js";

/**
 * This function generates a random multiplication problem within the given parameters
 * @param maxTerm Constrains the factor(s) of the problem to be no larger than this value
 * @param maxTerm2 (Optional) Constrains the second factor to be no larger than this value
 * @returns PlainText Math string for the generated problem
 */
export function generateMultiplicationProblem(
  term1max: number = 12,
  term2max: number = 12,
  term1min: number = 0,
  term2min: number = 0
): string {

  const term1 = generateRandomTerm(term1min, term1max);
  const term2 = generateRandomTerm(term2min, term2max);
  const product = term1 * term2;

  return `${term1} * ${term2} = ${product}`;
}
