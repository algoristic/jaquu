import React, { Component } from 'react'

import Grid from './Grid.js'
import Field from './Field.js'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
        this.windowSize = this.windowSize.bind(this);
        this.calcBoardDimensions = this.calcBoardDimensions.bind(this);
        this.isFieldDark = this.isFieldDark.bind(this);

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

    isFieldDark(index, dimensions) {
        let dark;
        const cols = dimensions.columns;
        const rows = dimensions.rows;
        if(cols % 2 === 0) {
            let row = Math.floor(index / cols);
            if(row % 2 === 0) {
                dark = (index % 2 === 0);
            } else {
                dark = (index % 2 === 1);
            }
        } else {
            dark = (index % 2 === 0);
        }
        return dark;
    }

    render() {
        const dimensions = this.calcBoardDimensions();
        console.log(dimensions);
        let fields = [];
        for(let i = 0; i < (dimensions.columns * dimensions.rows); i++) {
            const dark = this.isFieldDark(i, dimensions);
            fields[i] = (<Field i={i} key={'field_' + i} size="96px" dark={dark} />);
        }
        return (
            <div className='board' style={{
                marginRight: -dimensions.xCorrection,
                marginBottom: -dimensions.yCorrection
            }}>
                <Grid>
                {
                    fields
                }
                </Grid>
            </div>
        );
    }
}

export default Board;
