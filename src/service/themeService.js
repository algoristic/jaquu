import themes from '../assets/themes'

export default class ThemeService {
    getTheme = () => {
        let storedTheme = window.localStorage.getItem('theme');
        if(storedTheme) {
            const themeId = JSON.parse(storedTheme);
            const filteredThemes = Object.values(themes).filter(theme => theme.id === themeId);
            if(filteredThemes.length === 1) {
                storedTheme = filteredThemes[0];
            } else {
                storedTheme = undefined;
            }
        }
        if(!storedTheme) {
            storedTheme = themes.light;
        }
        return storedTheme;
    }
    setTheme = (theme) => {
        theme = JSON.stringify(theme.id);
        window.localStorage.setItem('theme', theme);
    }
}