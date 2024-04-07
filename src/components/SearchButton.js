import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchButton({ onClickFunc, style }) {
    return <button className='round-btn' onClick={onClickFunc} style={style}>
        <FontAwesomeIcon icon={faSearch} />
    </button>
};
