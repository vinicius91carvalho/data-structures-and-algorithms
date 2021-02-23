export interface EnqueueItems {
  enqueue: (...items: any) => void
}

export interface GetItems {
  getItems: () => any[]
}

export interface DequeueItem {
  dequeue: () => any
}

export interface PeekItem {
  peek: () => any
}

export interface CheckEmptyItems {
  isEmpty: () => any
}

export interface SizeItems {
  size: () => number
}

export interface ClearItems {
  clear: () => void
}
export interface Queue extends EnqueueItems, GetItems, DequeueItem, PeekItem, CheckEmptyItems, SizeItems, ClearItems {}
