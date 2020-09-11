import React from 'react'

import types from '../assets/types'

export default function(props) {
    const { task } = props;
    const { type } = task;
    const taskType = types[type];
    return React.createElement(taskType.editor, props);
}
