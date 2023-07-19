import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const [isRenter, setIsRenter] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        bedrooms: "",
        bathrooms: "",
        roomSize: "",
        picture: "",
        availabilityDate: "",
        rentPerMonth: "",
        phoneNumber: "",
        description: "",
    });

    class Create_method {
        user_register(url, data, success_message, unsucess_message) {
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
                    console.log(result);
                    setLoading(false);
                    window.alert(success_message);
                    window.location.href = "/login";
                })
                .catch((error) => {
                    setLoading(false);
                    window.alert(unsucess_message);
                });
        }

        getUserToken(url, data) {
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
                    setUser(result?.data);
                    if (result?.data?.user_role === "houseOwner") {
                        setIsOwner(true);
                    } else if (result?.data?.user_role === "houseRenter") {
                        setIsRenter(true);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                });
        }

        loginUser(url, data) {
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
                    if (result.status === "ok") {
                        window.localStorage.setItem("token", result.data);
                        window.localStorage.setItem("loggedIn", true);
                        window.location.href = "/";
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    window.alert(unsucess_message);
                });
        }
    }

    class House_Rent extends Create_method {
        register(e) {
            e.preventDefault();
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
            this.user_register(
                "http://localhost:5001/RegisterUser",
                register_user_Info,
                "Registration Complete",
                "Registration Incomplete or user already exists"
            );
        }

        login(e) {
            e.preventDefault();
            const user_email = e.target.emailAddress.value;
            const user_password = e.target.password.value;
            const login_user_Info = {
                user_email,
                user_password,
            };

            this.loginUser("http://localhost:5001/LoginUser", login_user_Info);
        }

        getUser(token) {
            this.getUserToken("http://localhost:5001/userData", token);
        }
    }

    const userRegistration = new House_Rent();
    const userLogin = new House_Rent();
    const loggedInUser = new House_Rent();
    
    useEffect(() => {
        // Call the getUser function when the component is mounted
        loggedInUser.getUser({ token: window.localStorage.getItem("token") });
    }, []);

    return (
        <ApiContext.Provider
            value={{
                formData,
                userRegistration,
                setFormData,
                loading,
                userLogin,
                user,
                isOwner,
                isRenter,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};
