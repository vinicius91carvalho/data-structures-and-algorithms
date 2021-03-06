import { HotPotato } from '@/algorithms/hot-potato'

describe('HotPotato', () => {
  test('Should save the participants', () => {
    const participants = ['João', 'José', 'Maria', 'Pedro']
    const hotPotato = new HotPotato(participants)
    expect(hotPotato.participants).toEqual(participants)
  })

  test('Should not permit that participants will be change outside', () => {
    const participants = ['João', 'José', 'Maria', 'Pedro']
    const hotPotato = new HotPotato(participants)
    hotPotato.participants = []
    expect(hotPotato.participants).toEqual(participants)
  })
})
