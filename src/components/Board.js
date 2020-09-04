import React, { Component } from 'react'

import VisualGrid from './VisualGrid'
import TaskGrid from './TaskGrid'
import Field from './Field'
import tasks from '../assets/dev_tasks'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
        this.windowSize = this.windowSize.bind(this);
        this.calcBoardDimensions = this.calcBoardDimensions.bind(this);
        this.getFieldProperties = this.getFieldProperties.bind(this);

        window.addEventListener('resize', this.windowSize);
    }

    windowSize() {
        this.setState({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        });
    }

    calcBoardDimensions() {
        const columns = Math.floor(this.state.width / 96) + 1;
        const rows = Math.floor(this.state.height / 96) + 1;
        let xCorrection = (columns * 96) - this.state.width;
        let yCorrection = (rows * 96) - this.state.height;
        return {
            columns: columns,
            rows: rows,
            xCorrection: xCorrection + 1,
            yCorrection: yCorrection
        };
    }

    getFieldProperties(index, dimensions) {
        let dark;
        const cols = dimensions.columns;
        const rows = dimensions.rows;
        const row = Math.floor(index / cols);
        if(cols % 2 === 0) {
            if(row % 2 === 0) {
                dark = (index % 2 === 0);
            } else {
                dark = (index % 2 === 1);
            }
        } else {
            dark = (index % 2 === 0);
        }
        return {
            y: row,
            dark: dark
        };
    }

    render() {
        const dimensions = this.calcBoardDimensions();
        let fields = [];
        for(let i = 0; i < (dimensions.columns * dimensions.rows); i++) {
            const fieldProperties = this.getFieldProperties(i, dimensions);
            fields[i] = (
                <Field key={i}
                    size={96}
                    position={{x: 0, y: 0}}
                    dark={fieldProperties.dark}>
                </Field>
            );
        }
        return (
            <div className='board' style={{
                marginRight: -dimensions.xCorrection,
                marginBottom: -dimensions.yCorrection
            }}>
                <TaskGrid columns={dimensions.columns - 1} rows={dimensions.rows - 1} />
                <VisualGrid>
                {
                    fields
                }
                </VisualGrid>
            </div>
        );
    }
}

export default Board;
