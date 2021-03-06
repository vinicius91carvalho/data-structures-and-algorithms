import { SizeItems } from '@/data-structures/common/collection-protocols'
import { DequeueItem, EnqueueItems } from '@/data-structures/queues/queue-protocols'

export type Result = {
  winner: string
  eliminated: string[]
}
export class HotPotatoQueue {
  constructor (
    participants: string[],
    private readonly enqueueItems: EnqueueItems,
    private readonly dequeueItem: DequeueItem,
    private readonly sizeItems: SizeItems
  ) {
    this.enqueueItems.enqueue(participants)
  }

  play (totalSteps: number): Result {
    const participantsEliminated: string[] = []
    let participantEliminated: string = ''

    while (this.sizeItems.size() > 1) {
      let steps = totalSteps
      while (steps > 0) {
        participantEliminated = this.dequeueItem.dequeue()
        if ((steps - 1) !== 0) {
          this.enqueueItems.enqueue(participantEliminated)
        }
        steps--
      }
      participantsEliminated.push(participantEliminated)
    }

    const result = {
      winner: this.dequeueItem.dequeue(),
      eliminated: participantsEliminated
    }

    return result
  }
}
