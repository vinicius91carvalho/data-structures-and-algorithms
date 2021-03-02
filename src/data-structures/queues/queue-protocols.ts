import { Collection } from '@/data-structures/common/collection-protocols'

export interface Queue extends EnqueueItems, DequeueItem, PeekItem, Collection {}

export interface EnqueueItems {
  enqueue: (...items: any) => void
}

export interface DequeueItem {
  dequeue: () => any
}

export interface PeekItem {
  peek: () => any
}
