export interface EnqueueItems {
  enqueue: (...items: any) => void
}

export interface GetItems {
  getItems: () => any[]
}

export interface Queue extends EnqueueItems, GetItems {}
