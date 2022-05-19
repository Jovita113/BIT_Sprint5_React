import React from 'react';
import Button from './Button';
import "./BookList.css";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
          <h2 className="app-header">Book List</h2>
          <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text=     {changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}
export default Header;