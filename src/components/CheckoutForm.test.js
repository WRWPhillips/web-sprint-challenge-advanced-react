import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>) 
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm/>)
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const submit = screen.getByRole('button');
  const zip = screen.getByLabelText(/zip/i);
  userEvent.type(firstName, 'Alois');
  userEvent.type(lastName, 'Crabsman');
  userEvent.type(address, '444 Banana Grove Way');
  userEvent.type(city, 'birmingham');
  userEvent.type(state, 'alabama');
  userEvent.type(zip, '77777');
  userEvent.click(submit);
  const success = screen.queryByText('You have ordered some plants! Woo-hoo!');
  const firstNameSuccess = screen.queryByText(/Alois/);
  const lastNameSuccess = screen.queryByText(/Crabsman/);
  const addressSuccess = screen.queryByText(/444 Banana Grove Way/);
  const citySuccess = screen.queryByText(/birmingham/);
  const stateSuccess = screen.queryByText(/alabama/);
  const zipSuccess = screen.queryByText(/77777/);

  expect(success).toBeInTheDocument();
  expect(firstNameSuccess).toBeInTheDocument();
  expect(lastNameSuccess).toBeInTheDocument();
  expect(addressSuccess).toBeInTheDocument();
  expect(citySuccess).toBeInTheDocument();
  expect(stateSuccess).toBeInTheDocument();
  expect(zipSuccess).toBeInTheDocument(); 

});
