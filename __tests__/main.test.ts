import { generateMultiplicationProblem } from '../src/generateMultiplicationProblem.js';
import { generateProblemSet } from '../src/generateProblemSet.js';
import { generateDivisionProblem } from '../src/generateDivisionProblem.js';
import { generateAdditionProblem } from '../src/generateAdditionProblem.js';
import { generateSubtractionProblem } from '../src/generateSubtractionProblem.js';


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
  const desiredSetSize = 10;

  beforeAll(async (): Promise<void> => {
    result = generateProblemSet(
      [
        (): string => generateMultiplicationProblem(),
        (): string => generateDivisionProblem(),
        (): string => generateAdditionProblem(),
        (): string => generateSubtractionProblem(),
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
