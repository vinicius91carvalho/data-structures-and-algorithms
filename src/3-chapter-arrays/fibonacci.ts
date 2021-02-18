export const fibonacci = (n: number): number => {
  const sequence = []
  sequence[1] = 1
  sequence[2] = 1

  for (let i = 3; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2]
  }

  return sequence[n]
}
