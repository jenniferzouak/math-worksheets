import { generateAdditionProblem } from '../src/generateAdditionProblem.js';
import { exportedForTesting } from '../src/generateAdditionProblem.js';
const { hasCarryOver } = exportedForTesting;

describe('addition check for carry over', () => {
  test('sum does not require carrying', () => {
    const actual = hasCarryOver(100, 200);
    expect(actual).toEqual(false);
  });
  test('sum does require carrying', () => {
    const actual = hasCarryOver(123, 127);
    expect(actual).toEqual(true);
  });
  test('addends have different lengths and it does require carrying', () => {
    const actual = hasCarryOver(123, 7);
    expect(actual).toEqual(true);
  });
});

describe('addition problem generation', () => {
  let result: string;

  // Assert result
  test('provides addition problem structured like 1+1=2', () => {
    result = generateAdditionProblem(1, 1, 1, 1, true);
    expect(result).toContain(`+`);
    expect(result).toContain(`=`);
    let terms = result.split(/[\s,\+\=]+/);
    expect(Number(terms[0])).toBe(1);
    expect(Number(terms[1])).toBe(1);
    expect(Number(terms[2])).toBe(2);
  });

  test('provides addition problem with terms within limit of [1,5]', () => {
    const maxTerm: number = 5;
    const minTerm: number = 1;

    let repeatTestCountDown = 15;

    do {
      result = generateAdditionProblem(maxTerm, maxTerm, minTerm, minTerm);
      let terms = result.split(/[\s,\+\=]+/);
      expect(Number(terms[0])).toBeLessThanOrEqual(maxTerm);
      expect(Number(terms[0])).toBeGreaterThanOrEqual(minTerm);
      expect(Number(terms[1])).toBeLessThanOrEqual(maxTerm);
      expect(Number(terms[1])).toBeGreaterThanOrEqual(minTerm);
    } while (--repeatTestCountDown > 0);
  });
});
