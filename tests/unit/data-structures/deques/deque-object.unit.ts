import { DequeObject } from '@/data-structures/deques/deque-object'

describe('DequeObject', () => {
  describe('getItems()', () => {
    test('Should get initialized elements', () => {
      const elements = [1, 2, 3]
      const deque = new DequeObject(elements)
      expect(deque.getItems()).toEqual(elements)
    })

    test('Should not get the same reference', () => {
      const elements = [1, 2, 3]
      const deque = new DequeObject(elements)
      expect(deque.getItems()).not.toBe(elements)
    })
  })
})
