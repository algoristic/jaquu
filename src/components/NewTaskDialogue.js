import React, { Component } from 'react'

import './NewTaskDialogue.css'

class NewTaskDialogue extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, position } = this.props;
        return <>{`type=${type}; position[x=${position.x} |y=${position.y}]`}</>
    }
}

export default NewTaskDialogue;
