import { QueueArray } from '@/data-structures/queue/queue-array'
import faker from 'faker'

const makeFakeItems = (): any[] => ([
  faker.random.objectElement(),
  faker.random.word(),
  faker.random.number()
])

describe('QueueArray', () => {
  describe('enqueue()', () => {
    test('Should add elements on queue', () => {
      const items = makeFakeItems()
      const queue = new QueueArray()
      queue.enqueue(...items)
      expect(queue.getItems()).toEqual(items)
    })
  })
})
