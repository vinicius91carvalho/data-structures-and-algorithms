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
  })
})
