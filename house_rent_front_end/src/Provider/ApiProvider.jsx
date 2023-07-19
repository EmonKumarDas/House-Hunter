import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [Houses, setHouses] = useState([]);
    const [HousesByOwner, setHousesByOwner] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5001/getHouses")
            .then(res => res.json())
            .then(result => {
                setHouses(result)
            })
    }, [])

    useEffect(() => {
        const fetchHousesByOwner = async () => {
            try {
                const response = await fetch(`http://localhost:5001/getHousesByOwners/${user?.user_email}`);
                const result = await response.json();
                setHousesByOwner(result);
            } catch (error) {
               
            }
        };
        fetchHousesByOwner();
        const intervalId = setInterval(fetchHousesByOwner, 30000);
        return () => clearInterval(intervalId);
    }, [user]);



    return (
        <ApiContext.Provider
            value={{
                Houses, HousesByOwner
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};
