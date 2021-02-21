import { DecimalToBinary } from '@/4-chapter-stacks/decimal-to-binary'
import { PushItems } from '@/4-chapter-stacks/stacks/stack-protocols'

class StackPushSpy implements PushItems {
  allItems: any[] = []
  callsCount: number = 0

  push (...items: any[]): void {
    this.allItems.push(...items)
    this.callsCount++
  }
}

interface SutTypes {
  sut: DecimalToBinary
  stackPushSpy: StackPushSpy
}

const makeSut = (): SutTypes => {
  const stackPushSpy = new StackPushSpy()
  const sut = new DecimalToBinary(stackPushSpy)
  return {
    sut,
    stackPushSpy
  }
}

describe('DecimalToBinary', () => {
  describe('calcRest()', () => {
    test('Should return 0 when an even value is provided', () => {
      const { sut } = makeSut()
      const rest = sut.calcRest(10)
      expect(rest).toBe(0)
    })

    test('Should return 1 when an odd value is provided', () => {
      const { sut } = makeSut()
      const rest = sut.calcRest(5)
      expect(rest).toBe(1)
    })
  })

  describe('calcQuotient()', () => {
    test('Should return the quotient correctly for the number 10', () => {
      const { sut } = makeSut()
      const quotient = sut.calcQuotient(10)
      expect(quotient).toBe(5)
    })

    test('Should return the quotient correctly for the number 5', () => {
      const { sut } = makeSut()
      const quotient = sut.calcQuotient(5)
      expect(quotient).toBe(2)
    })
  })

  describe('calc()', () => {
    test('Should fill stackSpy with correct values', () => {
      const { sut, stackPushSpy } = makeSut()
      sut.calc(10)
      expect(stackPushSpy.allItems).toEqual([0, 1, 0, 1])
      expect(stackPushSpy.callsCount).toBe(4)
    })
  })
})
