import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function({icon, size}) {
    return (
        <>
            <FontAwesomeIcon icon={icon} className={size ? ('fa-' + size) : ''} />
        </>
    )
}
