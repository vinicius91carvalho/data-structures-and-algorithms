import { QueueArray } from '@/data-structures/queue/queue-array'
import faker from 'faker'

const makeFakeItems = (): any[] => ([
  faker.helpers.createCard(),
  faker.random.word(),
  faker.random.number()
])

const makeSut = (items?: any[]): QueueArray => new QueueArray(items)

describe('QueueArray', () => {
  describe('getItems()', () => {
    test('Should return the elements on the queue', () => {
      const items = makeFakeItems()
      const queue = makeSut(items)
      expect(queue.getItems()).toEqual(items)
    })

    test('Should not return the reference of the elements on the queue', () => {
      const items = makeFakeItems()
      const queue = makeSut(items)
      expect(queue.getItems()).not.toBe(items)
    })

    test('Should avoid side effects', () => {
      const items = makeFakeItems()
      const queue = makeSut(items)
      const queueItems = queue.getItems()
      queueItems.pop()
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
      const queue = makeSut(items)
      queue.dequeue()
      expect(queue.getItems()).toEqual([items[1], items[2]])
    })

    test('Should return the element removed', () => {
      const items = makeFakeItems()
      const queue = makeSut(items)
      const item = queue.dequeue()
      expect(item).toEqual(items[0])
    })
  })

  describe('peek()', () => {
    test('Should return the first element of the queue', () => {
      const items = makeFakeItems()
      const queue = makeSut(items)
      const item = queue.peek()
      expect(item).toEqual(items[0])
    })

    test('Should not remove the first element of the queue', () => {
      const items = makeFakeItems()
      const queue = makeSut(items)
      queue.peek()
      expect(queue.getItems()).toEqual(items)
    })
  })

  describe('isEmtpy()', () => {
    test('Should return true if queue is empty', () => {
      const sut = makeSut()
      const isQueueEmpty = sut.isEmpty()
      expect(isQueueEmpty).toEqual(true)
    })

    test('Should return false if queue is not empty', () => {
      const sut = makeSut(makeFakeItems())
      const isQueueEmpty = sut.isEmpty()
      expect(isQueueEmpty).toEqual(false)
    })
  })

  describe('clear()', () => {
    test('Should remove all elements of the stack', () => {
      const sut = makeSut(makeFakeItems())
      sut.clear()
      expect(sut.getItems().length).toBe(0)
    })
  })

  describe('size()', () => {
    test('Should return the number of elements in the stack', () => {
      const fakeData = makeFakeItems()
      const sut = makeSut(fakeData)
      expect(sut.size()).toBe(fakeData.length)
    })
  })
})
