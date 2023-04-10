import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';

test('header counter changed?', () => {
    render(<App />)


    let myLink = screen.getByTestId('linkForTest');
    userEvent.click(myLink);


    setTimeout(() => {
        render(<HeaderBot />)

        let myIncrementCounter = screen.getByTestId('incrementButton');
        userEvent.click(myIncrementCounter);
        expect(screen.getByTestId('headerCounter')).toBe(1);
    }, 5000)
})