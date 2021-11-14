import React, { createContext, useContext } from 'react';

const Provider =  ( props ) =>{
    const [state,setState] = useContext(AppContext);
    return (            
            <AppContext.Provider value={[state,setState]}>
                {props.children}
            </AppContext.Provider>  
    );
}

export default Provider;
export const AppContext = createContext();