import { HotPotatoQueue } from '@/algorithms/hot-potato-queue'
import { EnqueueItemsSpy } from '@/tests/unit/mocks/mock-queue'

describe('HotPotatoQueue', () => {
  test('Should save the participants in the Queue', () => {
    const enqueueSpy = new EnqueueItemsSpy()
    const participants = ['João', 'José', 'Maria', 'Pedro']
    // eslint-disable-next-line no-new
    new HotPotatoQueue(participants, enqueueSpy)
    expect(enqueueSpy.items).toEqual(participants)
  })
})
