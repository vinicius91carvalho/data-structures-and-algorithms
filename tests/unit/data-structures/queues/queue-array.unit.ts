import { QueueArray } from '@/data-structures/queue/queue-array'

describe('QueueArray', () => {
  describe('enqueue()', () => {
    test('Should add elements on queue', () => {
      const queue = new QueueArray()
      queue.enqueue(1, 2, 3, 4, 5)
      expect(queue.getItems()).toEqual([1, 2, 3, 4, 5])
    })
  })
})
