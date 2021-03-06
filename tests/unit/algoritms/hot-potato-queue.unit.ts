import { HotPotatoQueue } from '@/algorithms/hot-potato-queue'
import { DequeueItemSpy, EnqueueItemsSpy } from '@/tests/unit/mocks/mock-queue'

type SutTypes = {
  sut: HotPotatoQueue
  enqueueSpy: EnqueueItemsSpy
  dequeueSpy: DequeueItemSpy
  participants: string[]
}

const makeSut = (): SutTypes => {
  const enqueueSpy = new EnqueueItemsSpy()
  const participants = ['João', 'José', 'Maria', 'Pedro']
  const dequeueSpy = new DequeueItemSpy(participants)
  // eslint-disable-next-line no-new
  const sut = new HotPotatoQueue(participants, enqueueSpy, dequeueSpy)
  return {
    sut,
    enqueueSpy,
    dequeueSpy,
    participants
  }
}

describe('HotPotatoQueue', () => {
  test('Should save the participants in the Queue', () => {
    const { enqueueSpy, participants } = makeSut()
    expect(enqueueSpy.items).toEqual(participants)
  })

  describe('play()', () => {
    test('Should pass the potato to the another participant based on the number of steps', () => {
      const { enqueueSpy, sut } = makeSut()
      sut.play(2)
      expect(enqueueSpy.items).toEqual(['Maria', 'Pedro', 'João', 'José'])
    })

    test('Should eliminate the participant with the potato when the iteration stops', () => {
      const { sut } = makeSut()
      const participantEliminated = sut.play(3)
      expect(participantEliminated).toEqual('Maria')
    })
  })
})
