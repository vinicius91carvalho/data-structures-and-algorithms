import { DequeObject } from '@/data-structures/deques/deque-object'
import { Deque } from '@/data-structures/deques/deque-protocols'

const makeSut = (elements? : any[]): Deque => new DequeObject(elements)

describe('DequeObject', () => {
  describe('getItems()', () => {
    test('Should get initialized elements', () => {
      const elements = [1, 2, 3]
      const deque = makeSut(elements)
      expect(deque.getItems()).toEqual(elements)
    })

    test('Should not get the same reference', () => {
      const elements = [1, 2, 3]
      const deque = makeSut(elements)
      expect(deque.getItems()).not.toBe(elements)
    })
  })
})
