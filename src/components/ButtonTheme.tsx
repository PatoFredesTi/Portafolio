import React from "react";
import { Switch, Input, Slider } from "./Styled/Styled.ButtonTheme";
import { useTheme } from "../hooks/ThemeContext"; 

const ToggleButton = () =>{
    const { theme, toggleTheme } = useTheme(); 

    return (
        <Switch>
            <Input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme} 
            />
            <Slider></Slider>            
        </Switch>
    );
};

export default ToggleButton;
