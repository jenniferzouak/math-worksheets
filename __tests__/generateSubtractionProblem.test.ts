import { generateSubtractionProblem } from '../src/generateSubtractionProblem.js';

import { exportedForTesting } from '../src/generateSubtractionProblem.js';
const { hasBorrowing } = exportedForTesting;

describe('subtraction check for borrowing', () => {
  test('difference does not require borrowing', () => {
    const actual = hasBorrowing(456, 123);
    expect(actual).toEqual(false);
  });
  test('difference does require borrowing', () => {
    const actual = hasBorrowing(456, 198);
    expect(actual).toEqual(true);
  });
  test('subtrahends have different lengths and it does require borrowing', () => {
    const actual = hasBorrowing(123, 7);
    expect(actual).toEqual(true);
  });
});

describe('subtraction problem generation', () => {
  let result: string;

  beforeAll(async () => {
    result = generateSubtractionProblem(5);
  });

  // Assert result
  it('provides a random math problem such as `2-1=1', () => {
    expect(result).toContain(`-`);
    expect(result).toContain(`=`);
  });
});
