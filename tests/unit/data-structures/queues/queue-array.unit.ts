import { QueueArray } from '@/data-structures/queue/queue-array'
import faker from 'faker'

const makeFakeItems = (): any[] => ([
  faker.helpers.createCard(),
  faker.random.word(),
  faker.random.number()
])

describe('QueueArray', () => {
  describe('getItems()', () => {
    test('Should return the elements on the queue', () => {
      const items = makeFakeItems()
      const queue = new QueueArray(items)
      expect(queue.getItems()).toEqual(items)
    })
  })

  describe('enqueue()', () => {
    test('Should add elements on queue', () => {
      const items = makeFakeItems()
      const queue = new QueueArray()
      queue.enqueue(...items)
      expect(queue.getItems()).toEqual(items)
    })
  })

  describe('dequeue()', () => {
    test('Should remove the first element of the queue', () => {
      const items = makeFakeItems()
      const queue = new QueueArray(items)
      const item = queue.dequeue()
      expect(item).toEqual(items[0])
      expect(queue.getItems()).toEqual([items[1], items[2]])
    })
  })
})
