// export function generateAdditionProblemConstrained(
//   maxAddend1:number = 99,
//   maxAddend2:number = 99,
//   minAddend1:number = 0,
//   minAddend2:number = 0,
//   avoidCarryover: boolean = false
// ): string {
//   let term1: number, term2: number, sum: number;
//   // validations
//   if (maxAddend1 < minAddend1) throw 'Invalid max addend1: it must be greater than the minimum';
//   if (maxAddend2 < minAddend2) throw 'Invalid max addend2: it must be greater than the minimum';
//   do {
//     term1 = generateRandomTerm(maxAddend1, minAddend1);
//     term2 = sum - term1; // could  be zero
//   } while ((avoidCarryover && hasCarryOver(term1, term2)) || sum > maxResult);
//   return `${term1} + ${term2} = ${sum}`;
// }
/**
 * Generates a random integer within, and inclusive of the limits provided.
 * {x ∈ ℤ | min ≤ x ≤ max }  [min,max]
 * @param max
 * @param min
 * @returns
 */
export function generateRandomTerm( min: number, max: number): number {
  let range: number = max - min +1; // range is one greater than difference to make it inclusive, i.e {x ∈ ℤ | 0 ≤ x ≤ 1 } gives us {0,1} i.e. cardinality |2|
 // 0,1  and range is 2 so we will have random number 0<= n <= 1.9999, then the floor will be either 0 or 1, then add zero which is our min we will have 0 or 1
  return Math.floor(Math.random() * range) + min;
}
