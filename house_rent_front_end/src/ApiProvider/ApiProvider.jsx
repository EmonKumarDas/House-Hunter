import { createContext, useState } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        bedrooms: '',
        bathrooms: '',
        roomSize: '',
        picture: '',
        availabilityDate: '',
        rentPerMonth: '',
        phoneNumber: '',
        description: '',
    });

    class House_Rent{
        
    }

    return (

        <ApiContext.Provider value={{
            formData,
            setFormData
        }}>
            {children}
        </ApiContext.Provider>
    );
}

