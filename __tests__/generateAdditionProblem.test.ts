import { generateAdditionProblem } from '../src/generateAdditionProblem.js';
import { exportedForTesting } from '../src/generateAdditionProblem.js';
const { hasCarryOver } = exportedForTesting;

describe('addition check for carry over', () => {
  let result: string;

  beforeAll(async () => {
    result = generateAdditionProblem(9,9,0,0, true);
    hasCarryOver(1, 2);
  });

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

  // Assert result
  it('provides a random math problem such as `1+1=2', () => {
    expect(result).toContain(`+`);
    expect(result).toContain(`=`);
  });
});

describe('addition problem generation', () => {
  let result: string;

  // Assert result
  test('provides addition problem structured like 1+1=2', () => {
    result = generateAdditionProblem(1,1,1,1, true);
    console.log(result);
    expect(result[0]).toBe(`1`);
    expect(result[result.length-1]).toBe(`2`);
    expect(result).toContain(`+`);
    expect(result).toContain(`=`);
  });


  test('provides addition problem with terms within limit i.e. 0-9', () => {
    result = generateAdditionProblem(100,100,0,0, true);
    expect(result).toContain(`+`);
    expect(result).toContain(`=`);
  });

});
