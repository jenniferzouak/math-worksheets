

import { generateMultiplicationProblem } from '../src/generateMultiplicationProblem.js';
import { generateProblemSet } from '../src/generateProblemSet.js';
import { generateDivisionProblem } from '../src/generateDivisionProblem.js';
import { generateSubtractionProblem } from '../src/generateSubtractionProblem.js';



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

describe('multiplication problem generation', () => {
  let result: string;

  beforeAll(async () => {
    result = generateMultiplicationProblem(5);
  });

  // Assert result
  it('provides a random math problem such as `2*1=2', () => {
    expect(result).toContain(`*`);
    expect(result).toContain(`=`);
  });
});

describe('division problem generation', () => {
  let result: string;

  beforeAll(async (): Promise<void> => {
    result = generateDivisionProblem(5);
  });

  // Assert result
  it('provides a random math problem such as `2/1=2', () => {
    expect(result).toContain(`÷`);
    expect(result).toContain(`=`);
  });
});

describe('problem set generation', () => {
  let result: string[];
  const desiredSetSize = 1;

  beforeAll(async (): Promise<void> => {
    result = generateProblemSet(
      [
        // (): string => generateMultiplicationProblem(999, 99),
        (): string => generateDivisionProblem(9999, true),
        // (): string => generateAdditionProblem(2),
        // (): string => generateSubtractionProblem(2, 1),
      ],
      desiredSetSize,
    );
    console.log(result);
  });

  // Assert result
  it('provides an array of random math problem such as `1+1=2', () => {
    expect(result.length).toBe(desiredSetSize);
  });
});
