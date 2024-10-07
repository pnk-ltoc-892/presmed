import { createContext } from "react";
import { doctors } from "../assets/assets.js";


export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const value = {
        doctors
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider