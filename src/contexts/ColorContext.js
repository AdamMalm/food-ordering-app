import React, { useContext } from 'react'

const ColorContext = React.createContext();

export const useColor = () => {
    return useContext(ColorContext)
}

const ColorProvider = ({ children }) => {
    const colors = {
        /*
        primary: "#016b2e"
        secondary: "#31923f"
        */
        
        primary: "#016b2e",
        secondary: "#31923f",
        lightcolor: "#ffffff",
        fontcolor: "#4e4e4e"
    }

    const returnPrimary = () => {
        return colors.primary
    }

    const returnSecondary = () => {
        return colors.secondary
    }

    const returnLight = () => {
        return colors.lightcolor
    }

    const returnFont = () => {
        return colors.fontcolor
    }
    
    const value = {
        returnPrimary,
        returnSecondary,
        returnLight,
        returnFont
    }

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    )
}

export {ColorProvider}
