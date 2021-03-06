import { HotPotatoQueue } from '@/algorithms/hot-potato-queue'
import { DequeueItemFake, EnqueueItemsFake, QueueSizeItemsFake } from '@/tests/unit/mocks/mock-queue'

type SutTypes = {
  sut: HotPotatoQueue
  enqueueFake: EnqueueItemsFake
  dequeueFake: DequeueItemFake
  participants: string[]
}

const makeSut = (): SutTypes => {
  const enqueueFake = new EnqueueItemsFake()
  const participants = ['João', 'José', 'Maria', 'Pedro']
  const dequeueFake = new DequeueItemFake(participants)
  const queueSizeItemsFake = new QueueSizeItemsFake(participants)
  // eslint-disable-next-line no-new
  const sut = new HotPotatoQueue(participants, enqueueFake, dequeueFake, queueSizeItemsFake)
  return {
    sut,
    enqueueFake,
    dequeueFake,
    participants
  }
}

describe('HotPotatoQueue', () => {
  test('Should save the participants in the Queue', () => {
    const { enqueueFake, participants } = makeSut()
    expect(enqueueFake.items).toEqual(participants)
  })

  describe('play()', () => {
    test('Should return all eliminated participants until the last remains', () => {
      const { sut } = makeSut()
      const participantsEliminated = sut.play(1)
      expect(participantsEliminated).toEqual(['João', 'José', 'Maria'])
    })

    test('Should return the eliminated participants until the last remains passing 2 as total steps', () => {
      const { sut } = makeSut()
      const participantsEliminated = sut.play(2)
      expect(participantsEliminated).toEqual(['José', 'Pedro', 'Maria'])
    })
  })
})
