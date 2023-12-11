/**
 * This function generates a random multiplication problem within the given parameters
 * @param maxTerm Constrains the factor(s) of the problem to be no larger than this value
 * @param maxTerm2 (Optional) Constrains the second factor to be no larger than this value
 * @returns PlainText Math string for the generated problem
 */

export function generateMultiplicationProblem(
  maxTerm: number,
  maxTerm2: number = -1
): string {
  if (maxTerm2 == -1) maxTerm2 = maxTerm;

  const term1 = Math.floor(Math.random() * (maxTerm - 1));
  const term2 = Math.floor(Math.random() * maxTerm2);
  const product = term1 * term2;

  return `${term1} * ${term2} = ${product}`;
}
