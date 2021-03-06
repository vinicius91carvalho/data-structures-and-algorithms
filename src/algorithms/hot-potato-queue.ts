import { SizeItems } from '@/data-structures/common/collection-protocols'
import { DequeueItem, EnqueueItems } from '@/data-structures/queues/queue-protocols'
import { IllegalArgumentError } from '@/errors/illegal-argument-error'

export type Result = {
  winner: string
  eliminated: string[]
}
export class HotPotatoQueue {
  constructor (
    private readonly enqueueItems: EnqueueItems,
    private readonly dequeueItem: DequeueItem,
    private readonly sizeItems: SizeItems
  ) {}

  play (participants: string[], steps: number): Result {
    if (steps < 1) {
      throw new IllegalArgumentError('steps', steps)
    }

    this.enqueueItems.enqueue(...participants)

    const participantsEliminated: string[] = []

    while (this.sizeItems.size() > 1) {
      for (let i = 0; i < steps; i++) {
        this.enqueueItems.enqueue(this.dequeueItem.dequeue())
      }
      participantsEliminated.push(this.dequeueItem.dequeue())
    }

    const result = {
      winner: this.dequeueItem.dequeue(),
      eliminated: participantsEliminated
    }

    return result
  }
}
