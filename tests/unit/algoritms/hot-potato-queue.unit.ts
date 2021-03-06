import { HotPotatoQueue } from '@/algorithms/hot-potato-queue'
import { IllegalArgumentError } from '@/errors/illegal-argument-error'
import { DequeueItemSpy, EnqueueItemsSpy, QueueSizeItemsSpy, QueueSpyFactory } from '@/tests/unit/mocks/mock-queue'

type SutTypes = {
  sut: HotPotatoQueue
  enqueueSpy: EnqueueItemsSpy
  dequeueSpy: DequeueItemSpy
  queueSizeItemsSpy: QueueSizeItemsSpy
  participants: string[]
}

const makeSut = (): SutTypes => {
  const participants: any[] = ['João', 'Ana', 'Fábio']
  const queueSpyFactory = new QueueSpyFactory()
  const enqueueSpy = queueSpyFactory.buildEnqueueItemSpy()
  const dequeueSpy = queueSpyFactory.buildDequeueItemSpy()
  const queueSizeItemsSpy = queueSpyFactory.buildSizeItemSpy()
  const sut = new HotPotatoQueue(enqueueSpy, dequeueSpy, queueSizeItemsSpy)
  return {
    sut,
    enqueueSpy,
    dequeueSpy,
    queueSizeItemsSpy,
    participants
  }
}

describe('HotPotatoQueue', () => {
  describe('play()', () => {
    test('Should not accept the steps less than 1', () => {
      const { sut, participants } = makeSut()
      let error: Error = new Error()
      try {
        sut.play(participants, 0)
      } catch (err) {
        error = err
      }
      expect(error).toEqual(new IllegalArgumentError('steps', 0))
      expect(error.message).toEqual('O argumento 0 para steps é inválido.')
    })

    test('Should call enqueue with correct values', () => {
      const { sut, participants, enqueueSpy } = makeSut()
      sut.play(participants, 1)
      expect(enqueueSpy.params).toEqual([['João', 'Ana', 'Fábio'], ['João'], ['Fábio']])
      expect(enqueueSpy.callsCount).toEqual(3)
    })

    test('Should call size of the queue to check it has more than 1 element', () => {
      const { sut, participants, queueSizeItemsSpy } = makeSut()
      sut.play(participants, 1)
      expect(queueSizeItemsSpy.callsCount).toEqual(3)
    })

    test('Should call dequeue and return correct values', () => {
      const { sut, participants, dequeueSpy } = makeSut()
      sut.play(participants, 1)
      expect(dequeueSpy.results).toEqual(['João', 'Ana', 'Fábio', 'João', 'Fábio'])
      expect(dequeueSpy.callsCount).toEqual(5)
    })

    test('Should return the eliminated participants', () => {
      const { sut, participants } = makeSut()
      const { eliminated } = sut.play(participants, 1)
      expect(eliminated).toEqual(['Ana', 'João'])
    })

    test('Should return the winner', () => {
      const { sut, participants } = makeSut()
      const { winner } = sut.play(participants, 1)
      expect(winner).toEqual('Fábio')
    })
  })
})
