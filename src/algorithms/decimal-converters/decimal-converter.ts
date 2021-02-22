export interface CalcRest {
  calcRest: (dividend: number) => number
}

export interface CalcQuotient {
  calcQuotient: (dividend: number) => number
}

export interface ConvertDecimal {
  convert: (dividend: number) => string
}

export interface DecimalConverter extends CalcRest, CalcQuotient, ConvertDecimal {}
