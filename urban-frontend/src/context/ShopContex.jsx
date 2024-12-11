import { createContext } from "react";

export const ShopContext = createContext()

const shopContextProvider = (props) => {
    
    const value = {
        
    }
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )


}
