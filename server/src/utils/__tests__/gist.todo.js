import axiosMock from 'axios'
import {createGist} from '../gist'

// we can comment these lines out and Jest will use the __mocks__ folder to mock
// out axios for us. If the name of axios file in __mocks__ is changed, then
// Jest will no longer mock our axios import.
// jest.mock('axios', () => ({
//   post: jest.fn(() => Promise.resolve({data: {status: 200}})),
// }))

beforeEach(() => {
  // this resets calls and arguments to post each time a new test is run
  axiosMock.post.mockClear()
})

test('makes a request to the github API with the given data', async () => {
  const data = {
    description: 'the description for this gist',
    public: true,
    files: {
      'file1.txt': {
        content: 'String file contents',
      },
    },
  }
  // the mock response we expect. createGist returns only the data property from
  // the response, so that's what we need here in order for createGist to return
  // anything other than undefined
  const mockResponse = {data: {status: 202}}
  // create a mock implementation that is used only once
  // that returns a resovled promise with a value of the mocked response
  // We don't have to return a Promise here, but it does indicate the async
  // nature of the request
  axiosMock.post.mockImplementationOnce(() => Promise.resolve(mockResponse))

  // make the request
  const res = await createGist(data)

  // check how many times our mock implementation was called
  expect(axiosMock.post).toHaveBeenCalledTimes(1)
  // check the parameters the mock was called with
  expect(axiosMock.post).toHaveBeenCalledWith(
    'https://api.github.com/gists',
    data,
  )
  // check that what we received in the response is the data object from the
  // mockResponse
  expect(res).toEqual(mockResponse.data)
})
