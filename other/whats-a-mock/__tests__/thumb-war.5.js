import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

// remove the inline mock function and jest
// will use the one that exists in the
// __mocks__ directory which I created for you
// already (you're welcome)

// If a __mocks__ folder with a module of the same name as the module being
// mocked is provided, we don't need to create an implementation in jest.mock.
// Jest will automatically use that file if we don't provide an implementation
jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})

/*
Hint below





















































Hint #1:

jest.mock(relativePathToModuleToMock)




 */
