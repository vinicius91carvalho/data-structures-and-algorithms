import { DequeObject } from '@/data-structures/deques/deque-object'
import { Deque } from '@/data-structures/deques/deque-protocols'
import faker from 'faker'

const makeSut = (items? : any[]): Deque => new DequeObject(items)

const makeFakeItems = (): any[] => ([
  faker.random.uuid(),
  faker.random.word(),
  faker.random.number()
])

describe('DequeObject', () => {
  describe('getItems()', () => {
    test('Should get initialized items', () => {
      const items = makeFakeItems()
      const sut = makeSut(items)
      expect(sut.getItems()).toEqual(items)
    })

    test('Should not get the same reference', () => {
      const items = makeFakeItems()
      const sut = makeSut(items)
      expect(sut.getItems()).not.toBe(items)
    })

    test('Should get an empty array if nothing is provided', () => {
      const sut = makeSut()
      expect(sut.getItems()).toEqual([])
    })
  })

  describe('clear()', () => {
    test('Should clear the data structure', () => {
      const items = makeFakeItems()
      const sut = makeSut(items)
      sut.clear()
      expect(sut.getItems()).toEqual([])
    })
  })

  describe('size()', () => {
    test('Should returns the total number of items', () => {
      const items = makeFakeItems()
      const sut = makeSut(items)
      expect(sut.size()).toBe(3)
    })
  })

  describe('isEmpty()', () => {
    test('Should returns true if deque is empty', () => {
      const sut = makeSut()
      expect(sut.isEmpty()).toBe(true)
    })

    test('Should returns false if deque is not empty', () => {
      const items = makeFakeItems()
      const sut = makeSut(items)
      expect(sut.isEmpty()).toBe(false)
    })
  })

  describe('addFront()', () => {
    test('Should add an element on deque', () => {
      const item = faker.random.number()
      const sut = makeSut()
      sut.addFront(item)
      expect(sut.getItems()).toEqual([item])
    })

    test('Should add an element in front of deque', () => {
      const newItem = faker.random.number()
      const items = makeFakeItems()
      const sut = makeSut(items)
      sut.addFront(newItem)
      expect(sut.getItems()).toEqual([newItem, ...items])
    })
  })

  describe('addBack()', () => {
    test('Should add an element in the end of deque', () => {
      const newItem = faker.random.number()
      const items = makeFakeItems()
      const sut = makeSut(items)
      sut.addBack(newItem)
      expect(sut.getItems()).toEqual([...items, newItem])
    })
  })

  describe('removeFront()', () => {
    test('Should remove an element in the front of deque', () => {
      const items = makeFakeItems()
      const sut = makeSut(items)
      const element = sut.removeFront()
      expect(element).toEqual(items[0])
      expect(sut.getItems()).toEqual([items[1], items[2]])
    })
  })
})
