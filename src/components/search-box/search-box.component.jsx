import React from 'react';
import './search-box.styles.css';

function App() {
    return <h1>Hi </h1>
}

export const SearchBox = ({placeholder, handleChange} )=> (
    <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
);