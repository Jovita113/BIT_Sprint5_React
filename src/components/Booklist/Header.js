import React from 'react';
import Button from './Button';

const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <header className="header">
            <h3 className="app-header">Book List App</h3>
            <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text={changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}

export default Header;