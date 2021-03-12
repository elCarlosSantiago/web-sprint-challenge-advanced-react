import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  //Arrange
  render(<CheckoutForm />);

  //act
  const header = screen.getByText(/checkout form/i);

  //assert
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(/checkout form/i);
});

test('form shows success message on submit with form details', () => {
  //Arrange
  render(<CheckoutForm />);

  //act
  const firstNameInput = screen.getByLabelText(/first name:/i);
  const lastNameInput = screen.getByLabelText(/last name:/i);
  const addressInput = screen.getByLabelText(/address:/i);
  const cityInput = screen.getByLabelText(/city:/i);
  const stateInput = screen.getByLabelText(/state:/i);
  const zipInput = screen.getByLabelText(/zip:/i);
  const submitBtn = screen.getByTestId(/submitbtn/i);

  userEvent.type(firstNameInput, 'Shrek');
  userEvent.type(lastNameInput, 'The Ogre');
  userEvent.type(addressInput, 'The Swamp House');
  userEvent.type(cityInput, 'Local Village');
  userEvent.type(stateInput, 'Neverland');
  userEvent.type(zipInput, '12345');
  userEvent.click(submitBtn);

  const successMessage = screen.getByTestId(/successMessage/i);
  expect(successMessage).toBeInTheDocument();
  console.log(successMessage);
});
