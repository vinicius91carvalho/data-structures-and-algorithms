import { Collection } from '@/data-structures/common/collection-protocols'

interface AddItemFront {
  addFront: (item: any) => void
}

interface AddItemBack {
  addBack: (item: any) => void
}

interface RemoveItemFront {
  removeFront: () => any
}

interface RemoveItemBack {
  removeBack: () => any
}

interface PeekItemFront {
  peekFront: () => any
}

interface PeekItemBack {
  peekBack: () => any
}

export interface Deque extends Collection, AddItemFront, AddItemBack, RemoveItemFront, RemoveItemBack, PeekItemFront, PeekItemBack {}
