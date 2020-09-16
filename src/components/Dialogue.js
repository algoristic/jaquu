import React, { Component } from 'react'

import './Dialogue.css'

class Dialoue extends Component {

    static Header({ children, className }) {
        return (
            <div className={'dialogue-header' + (className ? (' ' + className ): '')}>
                { children }
            </div>
        );
    }

    static Main({ children, className }) {
        return (
            <div className={'dialogue-main' + (className ? (' ' + className ): '')}>
                { children }
            </div>
        );
    }

    static Footer({ children, className }) {
        return (
            <div className={'dialogue-footer' + (className ? (' ' + className ): '')}>
                { children }
            </div>
        );
    }

    render() {
        const { children } = this.props;
        return (
            <div className='dialogue'>
                <div className='dialogue-body'>
                    { children }
                </div>
            </div>
        );
    }
}

export default Dialoue;
