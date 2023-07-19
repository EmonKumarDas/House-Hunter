import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {

    const [Houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/getHouses")
            .then(res => res.json())
            .then(result => {
                setHouses(result)
            })
    }, [])

    return (
        <ApiContext.Provider
            value={{
                Houses
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};
