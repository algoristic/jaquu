import React from 'react'

import Button from './Button'
import TimerFunctionContext from '../context/TimerFunctionContext'
import './TimerButton.css'

export default function({ text, amount }) {
    return (
        <TimerFunctionContext.Consumer>
        { ({ fn }) => {
            return (
                <Button small className='timer-btn' text={text} onClick={() => fn(amount)} />
            );
        }}
        </TimerFunctionContext.Consumer>
    );
};
