import thumbWar from '../thumb-war'

// import the utils module (see hint #1 at the bottom of the file)
import * as utils from '../utils'

test('returns winner', () => {
  // keep track of the original `getWinner` utility function (see hint #2)
  // This is the function we're going to mock, but we need to restore it once
  // done so that other tests can continue to use the original if need bed
  const origGetWinner = utils.getWinner

  // overwrite the utils.getWinner function with
  // our own that always returns the second player (see hint #3)
  // Now when we execute a function that uses 'getWinner' our mocked
  // implementation is what will be used
  utils.getWinner = (_, p2) => p2

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')

  // change this assertion to be more for a specific player
  // (like 'Kent C. Dodds', see hint #4):
  // expect(['Ken Wheeler', 'Kent C. Dodds'].includes(winner)).toBe(true)
  expect(winner).toBe('Kent C. Dodds')

  // restore the originalGetWinner function so other tests don't break
  // (see hint #5)
  // Now that we're done with the mock, we need to restore the mocked function
  // to it's original self for other tests
  utils.getWinner = origGetWinner
})

/*

Hints below:






See answers in the solution file



































Hint #1:

import * as utils from '../utils'





Hint #2:

const originalGetWinner = utils.getWinner






Hint #3:

utils.getWinner = functionThatAlwaysReturnsPlayer2






Hint #4:

expect(winner).toBe('Kent C. Dodds')






Hint #5:

utils.getWinner = originalGetWinner

 */
