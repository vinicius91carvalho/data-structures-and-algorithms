import { DequeObject } from '@/data-structures/deques/deque-object'
import { Deque } from '@/data-structures/deques/deque-protocols'
import faker from 'faker'

const makeSut = (items? : any[]): Deque => new DequeObject(items)

const makeFakeItems = (): any[] => ([
  faker.helpers.createCard(),
  faker.random.word(),
  faker.random.number()
])

describe('DequeObject', () => {
  describe('getItems()', () => {
    test('Should get initialized items', () => {
      const items = makeFakeItems()
      const deque = makeSut(items)
      expect(deque.getItems()).toEqual(items)
    })

    test('Should not get the same reference', () => {
      const items = makeFakeItems()
      const deque = makeSut(items)
      expect(deque.getItems()).not.toBe(items)
    })

    test('Should get an empty array if nothing is provided', () => {
      const deque = makeSut()
      expect(deque.getItems()).toEqual([])
    })
  })

  describe('clear()', () => {
    test('Should clear the data structure', () => {
      const items = makeFakeItems()
      const deque = makeSut(items)
      deque.clear()
      expect(deque.getItems()).toEqual([])
    })
  })

  describe('size()', () => {
    test('Should returns the total number of items', () => {
      const items = makeFakeItems()
      const deque = makeSut(items)
      expect(deque.size()).toBe(3)
    })
  })

  describe('isEmpty()', () => {
    test('Should returns true if deque is empty', () => {
      const deque = makeSut()
      expect(deque.isEmpty()).toBe(true)
    })

    test('Should returns false if deque is not empty', () => {
      const items = makeFakeItems()
      const deque = makeSut(items)
      expect(deque.isEmpty()).toBe(false)
    })
  })

  describe('addFront()', () => {
    test('Shoudl add an element in front of deque', () => {
      const item = faker.random.number()
      const deque = makeSut()
      deque.addFront(item)
      expect(deque.getItems()).toEqual([item])
    })
  })
})
