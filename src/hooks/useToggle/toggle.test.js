import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toggle from "./Toggle";

describe('checking the event click', () => {
    it('click event check', () => {
        render(<Toggle />)

        const toggler = screen.getByTestId('togglecheck')
        fireEvent.click(toggler)
        expect(screen.getByText(/Toggle/i)).toBeInTheDocument();
        expect(screen.getByText(/Make True/i)).toBeInTheDocument();
        expect(screen.getByText(/Make False/i)).toBeInTheDocument();
    })
})