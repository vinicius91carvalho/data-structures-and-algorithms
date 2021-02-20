import { StackArray } from '@/4-chapter-stacks/stack-array'

const makeSut = (initialData: any[]): StackArray => new StackArray(initialData)

describe('Stack Array', () => {
  describe('push()', () => {
    test('Should add a new element on top of the stack', () => {
      const fakeData: [] = []
      const sut = makeSut(fakeData)
      sut.push(1)
      expect(fakeData).toContain(1)
    })

    test('Should add elements on top of the stack', () => {
      const fakeData: [] = []
      const sut = makeSut(fakeData)
      sut.push(1, 2, 3)
      expect(fakeData).toEqual([1, 2, 3])
    })
  })

  describe('pop()', () => {
    test('Should remove an element on top of the stack', () => {
      const fakeData: number[] = [1, 2, 3, 4]
      const sut = makeSut(fakeData)
      sut.pop()
      expect(fakeData).toEqual([1, 2, 3])
    })

    test('Should return the element removed', () => {
      const fakeData: number[] = [1, 2, 3, 4]
      const sut = makeSut(fakeData)
      const element = sut.pop()
      expect(element).toEqual(4)
    })

    test('Should return undefined if array is empty', () => {
      const fakeData: [] = []
      const sut = makeSut(fakeData)
      const element = sut.pop()
      expect(element).toEqual(undefined)
    })
  })

  describe('peek()', () => {
    test('Should return the element on top of the stack', () => {
      const fakeData: number[] = [1, 2, 3, 4]
      const sut = makeSut(fakeData)
      const element = sut.peek()
      expect(element).toEqual(4)
    })

    test('Should not change the stack', () => {
      const fakeData: number[] = [1, 2, 3, 4]
      const sut = makeSut(fakeData)
      sut.peek()
      expect(fakeData).toEqual([1, 2, 3, 4])
    })
  })
})
