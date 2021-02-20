import { StackArray } from '@/4-chapter-stacks/stack-array'

const makeSut = (initialData?: any[]): StackArray => new StackArray(initialData)

describe('Stack Array', () => {
  describe('push()', () => {
    test('Should add a new element on top of the stack', () => {
      const sut = makeSut()
      sut.push(1)
      expect(sut.getItems()).toContain(1)
    })

    test('Should add elements on top of the stack', () => {
      const sut = makeSut()
      sut.push(1, 2, 3)
      expect(sut.getItems()).toEqual([1, 2, 3])
    })
  })

  describe('pop()', () => {
    test('Should remove an element on top of the stack', () => {
      const sut = makeSut([1, 2, 3, 4])
      sut.pop()
      expect(sut.getItems()).toEqual([1, 2, 3])
    })

    test('Should return the element removed', () => {
      const sut = makeSut([1, 2, 3, 4])
      const element = sut.pop()
      expect(element).toEqual(4)
    })

    test('Should return undefined if array is empty', () => {
      const sut = makeSut()
      const element = sut.pop()
      expect(element).toEqual(undefined)
    })
  })

  describe('peek()', () => {
    test('Should return the element on top of the stack', () => {
      const sut = makeSut([1, 2, 3, 4])
      const element = sut.peek()
      expect(element).toEqual(4)
    })

    test('Should not change the stack', () => {
      const fakeData: number[] = [1, 2, 3, 4]
      const sut = makeSut(fakeData)
      sut.peek()
      expect(sut.getItems()).toEqual(fakeData)
    })

    test('Should return empty if stack is empty', () => {
      const sut = makeSut()
      const element = sut.peek()
      expect(element).toEqual(undefined)
    })
  })

  describe('isEmtpy()', () => {
    test('Should return true if stack is empty', () => {
      const sut = makeSut()
      const isStackEmpty = sut.isEmpty()
      expect(isStackEmpty).toEqual(true)
    })

    test('Should return false if stack is not empty', () => {
      const sut = makeSut([1])
      const isStackEmpty = sut.isEmpty()
      expect(isStackEmpty).toEqual(false)
    })
  })

  describe('clear()', () => {
    test('Should remove all elements of the stack', () => {
      const sut = makeSut([1, 2, 3, 4])
      sut.clear()
      expect(sut.getItems().length).toBe(0)
    })
  })
})
