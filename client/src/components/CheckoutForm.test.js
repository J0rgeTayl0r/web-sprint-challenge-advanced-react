import React from "react";
import {render,fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
})

// test("checkout", () => {
//     const { getByText } = render(<CheckoutForm />);
//     expect(getByText(/cheackout form/)).toBeInTheDocument
   
// })
// test("form shows success message on submit with form details"), () => {
    
//     const { getByTestId, getByRole, getByLabelText } = render(<CheckoutForm />)
//     fireEvent.change(getByLabelText(/first name/i), { target: { value: 'Jorge' } });
//     fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Taylor' } });
//     fireEvent.change(getByLabelText(/address/i), { target: { value: "123 lane" }, });
//     fireEvent.change(getByLabelText(/city/i), { target: { value: "New York" }, });
//     fireEvent.change(getByLabelText(/State/i), { target: { value: "New York" }, });
//     fireEvent.change(getByLabelText(/zip/i), { target: { value: "10009" }, });

//     fireEvent.click(getByRole('button', /checkout/i))
//         expect(getByTestId(/successMessage/i)).toBeInTheDocument

// }
