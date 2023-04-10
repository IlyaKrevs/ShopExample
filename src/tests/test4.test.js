import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';

test('input change work?', () => {
    render(<App />)

    let myInput = screen.getByTestId('inputForTest');
    fireEvent.change(myInput, { target: { value: '55' } });
    expect(myInput.value).toEqual('55');
})