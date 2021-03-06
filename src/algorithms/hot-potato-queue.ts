import { DequeueItem, EnqueueItems } from '@/data-structures/queues/queue-protocols'

export class HotPotatoQueue {
  constructor (
    participants: string[],
    private readonly enqueueItems: EnqueueItems,
    private readonly dequeueItem: DequeueItem
  ) {
    this.enqueueItems.enqueue(participants)
  }

  play (steps: number): void {
    while (steps > 0) {
      this.enqueueItems.enqueue(this.dequeueItem.dequeue())
      steps--
    }
  }
}
