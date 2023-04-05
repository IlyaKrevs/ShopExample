import React from 'react';
import HeaderBot from './HeaderBot';
import HeaderTop from './HeaderTop';

const Header = (props) => {
    return (
        <header className="header__container">
            <HeaderTop />
            <HeaderBot bill={props.bill} {...props} />
        </header>
    );
};

export default Header;