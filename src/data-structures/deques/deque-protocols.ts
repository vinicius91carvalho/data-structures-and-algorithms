import { Collection } from '@/data-structures/common/collection-protocols'

interface AddItemFront {
  addFront: (item: any) => void
}

interface AddItemBack {
  addBack: (item: any) => void
}

export interface Deque extends Collection, AddItemFront, AddItemBack {}
