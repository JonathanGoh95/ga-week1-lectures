import { expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'
import Navbar from './Navbar';
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// import Fetch from './fetch'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Navbar />)

  // ACT
//   await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})