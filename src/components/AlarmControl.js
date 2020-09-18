import React from 'react'

import ChooseWeekdays from './ChooseWeekdays'
import Timepicker from './Timepicker'

export default function() {
    return (
        <div className='alarm-control'>
            <Timepicker />
            <ChooseWeekdays />
        </div>
    );
};
