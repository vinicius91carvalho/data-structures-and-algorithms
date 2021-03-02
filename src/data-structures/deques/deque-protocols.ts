import { ClearItems, GetItems, SizeItems } from '@/data-structures/common/collection-protocols'

export interface Deque extends GetItems, ClearItems, SizeItems {}
