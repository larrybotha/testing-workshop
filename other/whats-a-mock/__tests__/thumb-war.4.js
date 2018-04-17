import thumbWar from '../thumb-war'
import * as utils from '../utils'

// add an inline mock with the jest.mock API
//
// jest.mock(
//   relativePathToModuleToMock,
//   functionThatReturnsMockObject
// )
//
// (Hint #1)
jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((_, p2) => {
      return p2
    }),
  }
})

test('returns winner', () => {
  // No need for these lines if we are defining an inline mock, so we can
  // comment out these lines:
  // jest.spyOn(utils, 'getWinner')
  // utils.getWinner.mockImplementation((p1, p2) => p2)

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

  // because our mock is defined outside of the tests, restoring it won't do
  // anything to the mocked module, so we can remove it
  // utils.getWinner.mockRestore()
})

/*
Hint below:














































jest.mock('../utils', () => {
  return {
    // ...
    // see answer in the solution file
  }
})

 */
