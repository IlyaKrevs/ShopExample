import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/UI/MyButton/MyButton';
import HeaderBot from '../Components/Header/HeaderBot';

// если все тесты собрать в 1 файле, все рушится, я не понимаю в чем проблема, поэтому пришлось каждому тесту делать отдельный файл

test('padding button match', () => {
    render(<MyButton />)
    let microBtn = screen.getByTestId('microButtonTest');
    expect(microBtn).toHaveStyle({ padding: '2px 6px 3px 6px' })
})