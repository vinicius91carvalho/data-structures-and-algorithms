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
  })
})
