import React, { Component } from 'react'

import Board from './Board'
//import Control from './Control'
import ThemeContext from '../context/ThemeContext'
import ThemeService from '../service/themeService'

import './App.css';
import './AppThemes.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.themeService = new ThemeService();
    }

    componentDidMount() {
        this.setState({
            theme: this.themeService.getTheme()
        });
    }

    render() {
        return (
            <div className={'app' + (this.state.theme ? ` ${this.state.theme.className}`: '')}>
                <ThemeContext.Provider value={{
                    setTheme: (theme) => {
                        this.setState({theme: theme});
                        this.themeService.setTheme(theme);
                    },
                    isActive: (theme) => {
                        return (this.state.theme ? this.state.theme.id === theme.id : false);
                    }
                }}>
                    {/*<Control />*/}
                    <Board />
                </ThemeContext.Provider>
            </div>
        );
    }
}
export default App;
