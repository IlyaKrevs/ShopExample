import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';


test('item before route exist?', () => {
    render(<App />)

    let myTestItem = screen.queryByTestId('itemForTest')
    expect(myTestItem).toBeNull();
})