export class DecimalToBinary {
  calcRest (dividend: number): number {
    return dividend % 2
  }

  calcQuotient (dividend: number): number {
    return Math.floor(dividend / 2)
  }
}
