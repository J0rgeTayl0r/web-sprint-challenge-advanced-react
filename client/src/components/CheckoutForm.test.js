import React from "react";
import {render,fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, getByTestId } = render(<CheckoutForm />);


        fireEvent.change(getByLabelText(/First Name:/i), { target: { value: 'Jorge' } });
        fireEvent.change(getByLabelText(/Last Name:/i), { target: { value: 'Taylor' } });
        fireEvent.change(getByLabelText(/Address:/i), { target: { value: "123 lane" } });
        fireEvent.change(getByLabelText(/City:/i), { target: { value: "New York" } });
        fireEvent.change(getByLabelText(/State:/i), { target: { value: "New York" } });
        fireEvent.change(getByLabelText(/Zip:/i), { target: { value: "10009" } });
        
    const button = getByText('Checkout')
        fireEvent.click(button);
  
    const successMes = getByTestId(/successMessage/i);
      expect(successMes).toBeInTheDocument();
})
