import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';
import CatalogPage from '../Pages/CatalogPage';


test('how many items on page?', () => {
    render(<App />)

    let myLink = screen.getByTestId('linkForTest');
    userEvent.click(myLink);

    setTimeout(() => {
        render(<CatalogPage />)

        let testItem = screen.getAllByTestId('itemForTest');
        expect(testItem.length).toBe(9);
    }, 5000)
})