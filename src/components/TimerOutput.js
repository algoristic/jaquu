import React from 'react'

import Input from './Input'
import { getTimeDifference, displayRemainingTime } from '../util/timeUtils'

export default function({ time }) {
    const dif = getTimeDifference(new Date(0), new Date(time));
    const display = displayRemainingTime(dif);
    return (
        <Input value={'Zeit: ' + display} responsive={false} disabled={true} />
    );
}
