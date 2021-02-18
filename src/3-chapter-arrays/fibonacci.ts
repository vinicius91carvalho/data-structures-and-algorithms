export const fibonacci = (n: number): number | Error => {
  if (n < 0) {
    return new Error('The value must be positive')
  }

  if (n < 3) {
    return n
  }

  const sequence = []
  sequence[1] = 1
  sequence[2] = 1

  for (let i = 3; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2]
  }

  return sequence[n]
}
