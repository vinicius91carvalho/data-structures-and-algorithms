import { DequeueItem, EnqueueItems } from '@/data-structures/queues/queue-protocols'

export class HotPotatoQueue {
  constructor (
    participants: string[],
    private readonly enqueueItems: EnqueueItems,
    private readonly dequeueItem: DequeueItem
  ) {
    this.enqueueItems.enqueue(participants)
  }

  play (steps: number): string {
    let eliminated: string = ''
    while (steps > 0) {
      eliminated = this.dequeueItem.dequeue()
      this.enqueueItems.enqueue(eliminated)
      steps--
    }
    return eliminated
  }
}
