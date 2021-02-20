
export interface Stack extends PushItems, PopItem, PickItem, CheckEmptyItems, SizeItems, ClearItems, GetItems {}

export interface PushItems {
  push: (...items: any[]) => void
}

export interface PopItem {
  pop: () => any
}

export interface PickItem {
  peek: () => any
}

export interface CheckEmptyItems {
  isEmpty: () => boolean
}

export interface SizeItems {
  size: () => number
}

export interface ClearItems {
  clear: () => void
}

export interface GetItems {
  getItems: () => any[]
}
