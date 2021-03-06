import { HotPotato } from '@/algorithms/hot-potato'

describe('HotPotato', () => {
  test('Should save the participants', () => {
    const participants = ['João', 'José', 'Maria', 'Pedro']
    const hotPotato = new HotPotato(participants)
    expect(hotPotato.getItems()).toEqual(participants)
  })

  test('Should not permit that participants will be change outside by your reference', () => {
    const participants = ['João', 'José', 'Maria', 'Pedro']
    const hotPotato = new HotPotato([...participants])
    const hotPotatoParticipants = hotPotato.getItems()
    hotPotatoParticipants.push('Olivia')
    expect(hotPotato.getItems()).toEqual(participants)
  })
})
