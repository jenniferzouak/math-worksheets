/**
 * This function generates a random problem set based on the generator functions passed in. It will try not to create duplicate problems, if at all possible. Note: Duplicate check is not based on canonical representation.
 * @param generators An array of one or more functions which generate problems
 * @param setSize The retryCount of unique problems to generate
 * @returns Array of PlainText Math strings for the generated problems
 */

export function generateProblemSet(
  generators: { (): string }[],
  setSize: number,
): string[] {
  const result: string[] = [];

  for (let i = 0; i < setSize; i++) {
    let tmp: string;
    let retryCount: number = 0;
    // checks for duplicates and looks for another problem if so
    do {
      // choose a generator
      const generator =
        generators[Math.floor(Math.random() * generators.length)];

      tmp = generator();
      retryCount++;
    } while (result.includes(tmp) && retryCount < 5 * generators.length);
    result.push(tmp);
  }

  return result;
}
