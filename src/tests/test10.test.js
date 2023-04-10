import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';
import CatalogPage from '../Pages/CatalogPage';
import AdminPanel from '../Pages/AdminPanel';
import Footer from '../Components/Footer/Footer';


test('img show?', () => {
    render(<App />)

    let myLink = screen.getByTestId('adminLinkForTest');
    userEvent.click(myLink);

    setTimeout(() => {
        render(<Footer />)

        let testItem = screen.getByTestId('imageWapp');
        expect(testItem).toBeInTheDocument()
    }, 5000)
})