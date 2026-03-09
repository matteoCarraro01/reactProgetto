import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { it, expect, describe, jest } from '@jest/globals';
import App from './App.jsx';
import userEvent from '@testing-library/user-event';


describe("test app", () => {
    it('renderizza welcome', () => {
        render(<App />)
        const welcomeTitle = screen.queryByText(/Benvenuto!/i)
        expect(welcomeTitle).toBeInTheDocument()

    })
    it('renderizza 150 cards', () => {
        render(<App />)
        const cards = screen.queryAllByTestId('bookCard')
        expect(cards).toHaveLength(150)
    })
    it('renderizza comment area', async () => {
        render(<App />)
        const cards = screen.queryAllByTestId('bookCard')
        const img = within(cards[0]).queryByRole('img')
        await userEvent.click(img)
        const title = await screen.findByText(/Commenti/i)
        expect(title).toBeInTheDocument()
    })
    it('verifica commenti', async () => {
        globalThis.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                ok: true,
                json: () =>
                    Promise.resolve([{
                        "_id": "67f51df781b0dd00150a7a93",
                        "comment": "bho",
                        "rate": 5,
                        "elementId": "0316334758",
                        "author": "stella.marucelli@gmail.com",
                        "createdAt": "2025-04-08T13:00:39.353Z",
                        "updatedAt": "2025-04-08T13:00:39.353Z",
                        "__v": 0
                    },
                    {
                        "_id": "67f7e7a9707f0900159477ca",
                        "comment": "Tt",
                        "rate": 5,
                        "elementId": "0316334758",
                        "author": "stella.marucelli@gmail.com",
                        "createdAt": "2025-04-10T15:45:45.529Z",
                        "updatedAt": "2025-04-10T15:45:45.529Z",
                        "__v": 0
                    },]),
            }),
        );
        render(<App />)
        const cards = screen.queryAllByTestId('bookCard')
        const img = within(cards[0]).queryByRole('img')
        await userEvent.click(img)
        const comments = await screen.findAllByTestId('commento')
        expect(comments).toHaveLength(2)
    })
});




