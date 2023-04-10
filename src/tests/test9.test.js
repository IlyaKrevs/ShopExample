import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';
import CatalogPage from '../Pages/CatalogPage';
import AdminPanel from '../Pages/AdminPanel';


test('shitMsg exist? i dont know how to test my project, there to much mistakes on start', () => {
    render(<App />)

    let myLink = screen.getByTestId('adminLinkForTest');
    userEvent.click(myLink);

    setTimeout(() => {
        render(<AdminPanel />)

        let testItem = screen.getByTestId('shitMessage');
        expect(testItem).toBeInTheDocument()
    }, 5000)
})