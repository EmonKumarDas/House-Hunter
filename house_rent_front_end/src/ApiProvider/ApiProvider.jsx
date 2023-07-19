import { createContext, useState } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

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

    class Create_method {

        post(url, data, Sucess_message, unsucess_message) {
            setLoading(true);
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((result) => {
                    setLoading(false);
                    window.alert(Sucess_message);
                })
                .catch((error) => {
                    setLoading(false);
                    window.alert(unsucess_message);
                });
        }
    }

    class House_Rent extends Create_method {

        register(e) {
            const user_name = e.target.fullName.value;
            const user_role = e.target.role.value;
            const user_phoneNumber = e.target.phoneNumber.value;
            const user_email = e.target.emailAddress.value;
            const user_password = e.target.password.value;
            const register_user_Info = {
                user_name,
                user_role,
                user_phoneNumber,
                user_email,
                user_password,
            };
            this.post("http://localhost:5001/RegisterUser", register_user_Info, "Registration Complete", "Registration inComplete or user exist");
        }

        login(e) {
            const user_email = e.target.emailAddress.value;
            const user_password = e.target.password.value;
            const login_user_Info = {
                user_email,
                user_password,
            };
            console.log(login_user_Info)
            // this.post("http://localhost:5001/RegisterUser", login_user_Info, "Registration Complete", "Registration inComplete or user exist");
        }
    }

    const userRegistration = new House_Rent();
    const userLogin = new House_Rent();

    return (

        <ApiContext.Provider value={{
            formData, userRegistration,
            setFormData, loading, userLogin
        }}>
            {children}
        </ApiContext.Provider>
    );
}

