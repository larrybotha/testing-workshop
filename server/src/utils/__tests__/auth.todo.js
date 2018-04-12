import {isPasswordAllowed, userToJSON} from '../auth'

test('isPasswordAllowed only allows some passwords', () => {
  const disallowedPasswords = ['1a2b3c', 'asdasd', '123456']
  const allowedPasswords = ['1a2b3c4']

  disallowedPasswords.map(p => expect(isPasswordAllowed(p)).toBe(false))

  allowedPasswords.map(p => expect(isPasswordAllowed(p)).toBe(true))
})

test('userToJSON excludes secure properties', () => {
  const user = {
    id: 'some-id',
    username: 'sarah',
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  // we could run userToJSON on user, and check which props are there, but
  // then we're testing the implementation.
  // Instead, what we expect is for our user to be returned as below, so we
  // test that the outcome of running userToJSON is aligned with our expectation
  // Yes, we expect those properties to be removed, but what does that look
  // like? Don't reimplement the function.
  const safeUser = {
    id: user.id,
    username: user.username,
  }

  // rather test outcome than re-implement functionality of checking individual
  // props
  expect(userToJSON(user)).toEqual(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
