import { EnqueueItems } from '@/data-structures/queues/queue-protocols'

export class HotPotatoQueue {
  constructor (
    participants: string[],
    private readonly enqueueItems: EnqueueItems) {
    this.enqueueItems.enqueue(...participants)
  }
}
