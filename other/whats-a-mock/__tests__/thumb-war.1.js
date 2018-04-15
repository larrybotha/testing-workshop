import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  // create a mock which tracks the number of times it is called, and the
  // arguments it is called with each time
  // eslint-disable-next-line import/namespace
  utils.getWinner = (...args) => {
    // track the arguments passed through in this call
    utils.getWinner.mock.calls.push(args)

    // return only the first argument
    return args[1]
  }
  // create an object on the getWinner function where we can store how many
  // times the function has been called.
  // This has to be tracked inside the function call, and can't be thought
  // of as an instance with some sort of property tracked internally
  utils.getWinner.mock = {calls: []}

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls.length).toBe(2)
  // assert that our mock is called with the correct arguments
  utils.getWinner.mock.calls.map(args => {
    expect(args).toContain('Kent C. Dodds')
    expect(args).toContain('Ken Wheeler')
  })

  // eslint-disable-next-line import/namespace
  utils.getWinner = originalGetWinner
})

/*
Hints below:









































































Hint #1:

There's nothing too magical going on here, you just need some place to store the state for every time the function is
called. Something like this should do just fine (Sorry, this is the solution I have. I couldn't think of a way to hint
at it without totally giving it away or leading you astray):

utils.getWinner = (...args) => {
  utils.getWinner.mock.calls.push(args)
  return args[1]
}
utils.getWinner.mock = {calls: []}







Hint #2:
Depending on how you store the state of how many times it's been called, you might either do this:

expect(timesCalled).toBe(2)

Or you might do this:

expect(utils.getWinner.mock.calls).toHaveLength(2)

Either way is fine.






Hint #3:

You can have assertions within a forEach and that's not entirely uncommon. Depending on how you're storing the state
of the arguments its called with you might do this (#spoileralert this is the solution... sorry):

utils.getWinner.mock.calls.forEach(args => {
  expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
})




 */
