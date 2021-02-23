import { Queue } from '@/data-structures/queue/queue-protocols'

export class QueueArray implements Queue {
  items: any[]

  constructor (initialData?: any[]) {
    this.items = initialData ? [...initialData] : []
  }

  getItems (): any[] {
    return [...this.items]
  }

  enqueue (...items: any): void {
    this.items.push(...items)
  }

  dequeue (): any {
    return this.items.shift()
  }

  peek (): any {
    return this.items[0]
  }

  isEmpty (): boolean {
    return this.items.length === 0
  }
}
