import { generateRandomTerm } from '../src/generateRandomTerm.js';

// note  let dictionary: { [key: string]: number } = {};


describe('random integer generation', () => {
  test('it generates a number within the limits', () => {
    const limitMin: number = 0;
    const limitMax: number = 5;
    const rc = generateRandomTerm(limitMin, limitMax);
    expect(rc).toBeGreaterThanOrEqual(limitMin);
    expect(rc).toBeLessThanOrEqual(limitMax);
  });

  test('random integer generation, negative numbers', () => {
    const limitMin: number = -5;
    const limitMax: number = 0;

    const rc = generateRandomTerm(limitMin, limitMax);
    expect(rc).toBeGreaterThanOrEqual(limitMin);
    expect(rc).toBeLessThanOrEqual(limitMax);
  });

  test('random integer generation, negative to positive numbers', () => {
    const limitMin: number = -5;
    const limitMax: number = 5;

    const rc = generateRandomTerm(limitMin, limitMax);
    expect(rc).toBeGreaterThanOrEqual(limitMin);
    expect(rc).toBeLessThanOrEqual(limitMax);
  });

  
  test('random integer generation, distribution is OK', () => {
    const limitMin: number = 0;
    const limitMax: number = 2;
    const setSize: number = 25;
    let countdown: number = setSize;
    const generatedSet: number[] = Array();
    do {
      const rc = generateRandomTerm(limitMin, limitMax);
      generatedSet.push(rc);
    } while (--countdown > 0);

    expect(generatedSet.length).toBe(setSize);

    let cSquared: number = chiSquareCalc(generatedSet, limitMax - limitMin + 1);
    expect(cSquared).toBeLessThan(15);

  });

  test('it can generate numbers at the minimum of the limits', () => {
    let count: number = 0;
    const maxTries = 100;
    const limitMin: number = 1;
    const limitMax: number = 2;
    do {
      const rc = generateRandomTerm(limitMin, limitMax);
      if (rc == limitMin) break;
    } while (count++ < maxTries);
    expect(count).toBeLessThan(maxTries);
  });

  test('it can generate numbers at the maximum of the limits', () => {
    let count: number = 0;
    const maxTries = 100;
    const limitMin: number = 1;
    const limitMax: number = 2;
    do {
      const rc = generateRandomTerm(limitMin, limitMax)
      if (rc == limitMax) break;
    } while (count++ < maxTries);
    expect(count).toBeLessThan(maxTries);
  });

  test('it can generate numbers at the minimum of zero', () => {
    let count: number = 0;
    const maxTries = 100;
    const limitMin: number = 0;
    const limitMax: number = 1;
    do {
      const rc = generateRandomTerm(limitMin, limitMax);
      if (rc == limitMin) break;
    } while (count++ < maxTries);
    expect(count).toBeLessThan(maxTries);
  });

  test('it can generate numbers for a range with |1| ', () => {
    let count: number = 0;
    const maxTries = 100;
    const sameLimit: number = 1;

    do {
      const rc = generateRandomTerm(sameLimit, sameLimit);
      if (rc == sameLimit) break;
    } while (count++ < maxTries);
    expect(count).toBeLessThan(maxTries);
  });

  test('it can generate numbers for a range with |1| when it is zero ', () => {
    let count: number = 0;
    const maxTries = 100;
    const sameLimit: number = 0;

    do {
      const rc = generateRandomTerm(sameLimit, sameLimit);
      //console.log(rc);
      if (rc == sameLimit) break;
    } while (count++ < maxTries);
    expect(count).toBeLessThan(maxTries);
  });
});

function chiSquareCalc(set: number[], bincount: number): number {
  let cSquared: number = 0;

  // histogram: create the bins and count entries
  let bins: number[] = new Array(bincount);
  for (const x of set) {
    if (x in bins) {
      bins[x] = bins[x] + 1;
    } else {
      bins[x] = 0;
    }
  }

  const expectedCount = set.length/bincount;
  for (const i in bins){
    cSquared += (bins[i] - expectedCount) ** 2 / expectedCount;
  }
  return cSquared;
}
