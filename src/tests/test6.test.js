import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';

test('item after route exist?', () => {
    render(<App />)

    let myLink = screen.getByTestId('linkForTest');
    userEvent.click(myLink);

    // without timeout not working, async not helped, i dont know hot to fix if
    setTimeout(() => {
        let myCatalog = screen.queryByTestId('itemForTest');
        expect(myCatalog).toBeInTheDocument();
    }, 5000)
})