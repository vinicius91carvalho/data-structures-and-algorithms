export interface CheckEmptyItems {
  isEmpty: () => any
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

export interface Collection extends CheckEmptyItems, SizeItems, ClearItems, GetItems {}
