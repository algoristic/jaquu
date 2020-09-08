import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function({name, size}) {
    return (
        <>
            <FontAwesomeIcon icon={name} className={size ? ('fa-' + size) : ''} />
        </>
    )
}
