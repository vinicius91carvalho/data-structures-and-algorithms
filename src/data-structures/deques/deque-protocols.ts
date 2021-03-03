import { Collection } from '@/data-structures/common/collection-protocols'

interface AddItemFront {
  addFront: (item: any) => void
}

export interface Deque extends Collection, AddItemFront {}
