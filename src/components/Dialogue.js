import React, { Component } from 'react'

import ClickableOverlay from './ClickableOverlay'
import './Dialogue.css'

class Dialoue extends Component {
    constructor(props) {
        super(props);
    }

    static Header({children}) {
        return (
            <div className='dialogue-header'>
                { children }
            </div>
        );
    }

    static Main({children}) {
        return (
            <div className='dialogue-main'>
                { children }
            </div>
        );
    }

    static Footer({children}) {
        return (
            <div className='dialogue-footer'>
                { children }
            </div>
        );
    }

    render() {
        const { children, modal, modalAction } = this.props;
        const { width } = this.props;
        return (
            <div className='dialogue'>
                <div className='dialogue-body'>
                    { children }
                </div>
                {
                    modal && (
                        <ClickableOverlay action={modalAction} />
                    )
                }
            </div>
        );
    }
}

export default Dialoue;
