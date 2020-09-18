import React from 'react'
import TimeKeeper from 'react-timekeeper'

import { now } from '../util/timeUtils'
import './Timepicker.css'

export default function() {
    const time = new Date(now());
    return (
        <div className='timepicker'>
            <TimeKeeper hour24Mode time={{
                hour: time.getHours(),
                minute: time.getMinutes()
            }}>
            </TimeKeeper>
        </div>
    );
};
