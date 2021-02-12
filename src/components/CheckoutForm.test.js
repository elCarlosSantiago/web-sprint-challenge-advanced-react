import React from 'react'
import { render, screen } from '@testing-library/react'
import CheckoutForm from './CheckoutForm'
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  //render
  render(<CheckoutForm />)
  //query header
  const formHeader = screen.getByText(/checkout form/i)
  //get has implicit assertion but for sanity -->
  expect(formHeader).toHaveTextContent(/checkout form/i)
})

test('form shows success message on submit with form details', () => {
  //render
  render(<CheckoutForm />)
  //query inputs
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const address = screen.getByLabelText(/address/i)
  const city = screen.getByLabelText(/city/i)
  const state = screen.getByLabelText(/state/i)
  const zip = screen.getByLabelText(/zip/i)
  const checkoutBtn = screen.getByRole(/button/i)

  //act
  userEvent.type(firstName, 'Shrek')
  userEvent.type(lastName, 'The Ogre')
  userEvent.type(address, 'Swamp House')
  userEvent.type(city, 'The Swamp')
  userEvent.type(state, 'Florida')
  userEvent.type(zip, '10001')
  userEvent.click(checkoutBtn)

  //assert
  const successMessage = screen.getByTestId(/successmessage/i)

  expect(successMessage).toBeInTheDocument()
})
