import { StackArray } from '@/4-chapter-stacks/stack-array'
import faker from 'faker'

const makeSut = (initialData?: any[]): StackArray => new StackArray(initialData)

const makeFakeArray = (isLastAnObject: boolean = false): any[] => ([
  faker.random.number(),
  faker.random.word(),
  isLastAnObject ? faker.helpers.createCard() : faker.random.number()
])

describe('Stack Array', () => {
  describe('push()', () => {
    test('Should add a new element on top of the stack', () => {
      const number = faker.random.number()
      const sut = makeSut()
      sut.push(number)
      expect(sut.getItems()).toContain(number)
    })

    test('Should add elements on top of the stack', () => {
      const fakeData = makeFakeArray()
      const sut = makeSut()
      sut.push(...fakeData)
      expect(sut.getItems()).toEqual(fakeData)
    })
  })

  describe('pop()', () => {
    test('Should remove an element on top of the stack', () => {
      const fakeData = makeFakeArray()
      const sut = makeSut(fakeData)
      sut.pop()
      expect(sut.getItems()).toEqual([fakeData[0], fakeData[1]])
    })

    test('Should return the element removed', () => {
      const fakeData = makeFakeArray(true)
      const sut = makeSut(fakeData)
      const element = sut.pop()
      expect(element).toEqual(fakeData[fakeData.length - 1])
    })

    test('Should return undefined if array is empty', () => {
      const sut = makeSut()
      const element = sut.pop()
      expect(element).toEqual(undefined)
    })
  })

  describe('peek()', () => {
    test('Should return the element on top of the stack', () => {
      const fakeData = makeFakeArray()
      const sut = makeSut(fakeData)
      const element = sut.peek()
      expect(element).toEqual(fakeData[fakeData.length - 1])
    })

    test('Should not change the stack', () => {
      const fakeData = makeFakeArray()
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
      const sut = makeSut(makeFakeArray())
      const isStackEmpty = sut.isEmpty()
      expect(isStackEmpty).toEqual(false)
    })
  })

  describe('clear()', () => {
    test('Should remove all elements of the stack', () => {
      const sut = makeSut(makeFakeArray())
      sut.clear()
      expect(sut.getItems().length).toBe(0)
    })
  })

  describe('size()', () => {
    test('Should return the number of elements in the stack', () => {
      const fakeData = makeFakeArray(true)
      const sut = makeSut(fakeData)
      sut.size()
      expect(sut.getItems().length).toBe(fakeData.length)
    })
  })
})
