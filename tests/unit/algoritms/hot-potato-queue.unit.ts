import { HotPotatoQueue } from '@/algorithms/hot-potato-queue'
import { DequeueItemSpy, EnqueueItemsSpy } from '@/tests/unit/mocks/mock-queue'

describe('HotPotatoQueue', () => {
  test('Should save the participants in the Queue', () => {
    const enqueueSpy = new EnqueueItemsSpy()
    const participants = ['João', 'José', 'Maria', 'Pedro']
    const dequeueSpy = new DequeueItemSpy(participants)
    // eslint-disable-next-line no-new
    new HotPotatoQueue(participants, enqueueSpy, dequeueSpy)
    expect(enqueueSpy.items).toEqual(participants)
  })

  describe('play()', () => {
    test('Should pass the potato to the another participant based on the number of steps', () => {
      const enqueueSpy = new EnqueueItemsSpy()
      const participants = ['João', 'José', 'Maria', 'Pedro']
      const dequeueSpy = new DequeueItemSpy(participants)
      // eslint-disable-next-line no-new
      const hotPotato = new HotPotatoQueue(participants, enqueueSpy, dequeueSpy)
      hotPotato.play(2)
      expect(enqueueSpy.items).toEqual(['Maria', 'Pedro', 'João', 'José'])
    })
  })
})
