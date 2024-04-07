import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// contexts
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSwitch({ style }) {
    const { theme, setTheme } = useContext(ThemeContext)
  
    const handleThemeSwitch = () => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }
  return (
    <button className="round-btn" onClick={handleThemeSwitch} style={style}>
      <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
    </button>
  );
}
