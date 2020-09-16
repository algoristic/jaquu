import React from 'react'

import './ClickableOverlay.css'

export default function({ action }) {
    return (
        <div className='clickable-overlay' onClick={action} />
    );
}
