/**
 * Generates a random integer within, and inclusive of the limits provided.
 * {x ∈ ℤ | min ≤ x ≤ max }  [min,max]
 * @param max
 * @param min
 * @returns the random integer
 */
export function generateRandomTerm( min: number, max: number): number {
  const range: number = max - min +1; // range is one greater than difference to make it inclusive, i.e {x ∈ ℤ | 0 ≤ x ≤ 1 } gives us {0,1} i.e. cardinality |2|
 // 0,1  and range is 2 so we will have random number 0<= n <= 1.9999, then the floor will be either 0 or 1, then add zero which is our min we will have 0 or 1
  return Math.floor(Math.random() * range) + min;
}
