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
export interface Queue extends EnqueueItems, GetItems, DequeueItem {}
