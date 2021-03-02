import { Collection } from '@/data-structures/common/collection-protocols'

export interface Stack extends PushItems, PopItem, PickItem, Collection {}

export interface PushItems {
  push: (...items: any[]) => void
}

export interface PopItem {
  pop: () => any
}

export interface PickItem {
  peek: () => any
}
