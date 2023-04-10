import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';

test('btn exist?', () => {
    render(<App />)
    let myBtn = screen.getByTestId('btnForTest');
    expect(myBtn).toBeInTheDocument();
})