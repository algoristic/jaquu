import React from 'react'

import TimerButton from './TimerButton'
import TimerOutput from './TimerOutput'
import './TimerControl.css'

export default function({ time }) {
    return (
        <div className='timer-control'>
            <div className='buttons add-buttons'>
                <TimerButton text='+1d' amount={86400000} />
                <TimerButton text='+1h' amount={3600000} />
                <TimerButton text='+1m' amount={60000} />
                <TimerButton text='+1s' amount={1000} />
            </div>
            <div className='buttons subtract-buttons'>
                <TimerButton text='-1d' amount={-86400000} />
                <TimerButton text='-1h' amount={-3600000} />
                <TimerButton text='-1m' amount={-60000} />
                <TimerButton text='-1s' amount={-1000} />
            </div>
            <TimerOutput time={time} />
        </div>
    );
};
