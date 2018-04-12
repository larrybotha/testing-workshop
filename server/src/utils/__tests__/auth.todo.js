import {isPasswordAllowed} from '../auth'

test('isPasswordAllowed only allows some passwords', () => {
  const tooShort = '1a2b3c'
  const alphaOnly = 'asdasd'
  const numbericOnly = '123456'
  const justRight = '1a2b3c4'

  expect(isPasswordAllowed(tooShort)).toBe(false)
  expect(isPasswordAllowed(alphaOnly)).toBe(false)
  expect(isPasswordAllowed(numbericOnly)).toBe(false)
  expect(isPasswordAllowed(justRight)).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:
  // const user = {
  //   id: 'some-id',
  //   username: 'sarah',
  //   // ↑ above are properties which should
  //   // be present in the returned object
  //
  //   // ↓ below are properties which shouldn't
  //   // be present in the returned object
  //   exp: new Date(),
  //   iat: new Date(),
  //   hash: 'some really long string',
  //   salt: 'some shorter string',
  // }
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
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
