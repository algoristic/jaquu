import React, { Component } from 'react'

import ThemeSwitcher from './ThemeSwitcher'

import './Control.css'

class Control extends Component {
    render() {
        return (
            <div className='control-wrapper'>
                <div className='control'>
                    <ThemeSwitcher />
                </div>
            </div>
        );
    }
}

export default Control;