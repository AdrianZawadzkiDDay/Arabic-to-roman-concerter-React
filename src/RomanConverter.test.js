import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import RomanConverter from './RomanConverter';


describe('<RomanConverter />', () => {
    afterEach(cleanup)

    it('has an input field', () => {
        const {getByLabelText} = render(<RomanConverter/>)
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    })

    it('shows non roman number by default', () => {
        const {getByText} = render(<RomanConverter/>)
        expect(() => {
            getByText("Roman: none")
        }).not.toThrow();
    })

    it('coverts 1 to I', () => {
        const {getByLabelText, getByText} = render(<RomanConverter/>)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "1"}});

        expect(() => {
            getByText("Roman: I")
        }).not.toThrow();
    })

    it('coverts 5 to V', () => {
        const {getByLabelText, getByText} = render(<RomanConverter/>)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "5"}});

        expect(() => {
            getByText("Roman: V")
        }).not.toThrow();
    })

    it('coverts 2019 to MMXIX', () => {
        const {getByLabelText, getByText} = render(<RomanConverter/>)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "2019"}});

        expect(() => {
            getByText("Roman: MMXIX")
        }).not.toThrow();
    })



})

// to install this testing library
// npm i --save-dev @testing-library/react