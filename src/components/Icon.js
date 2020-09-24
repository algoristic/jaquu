import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function({ name, size, onClick }) {
    return (
        <span onClick={onClick}>
            <FontAwesomeIcon icon={name} className={size ? ('fa-' + size) : ''} />
        </span>
    );
};
