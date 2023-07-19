import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [Houses, setHouses] = useState([]);
    const [HousesByOwner, setHousesByOwner] = useState([]);
    const [bookedHouse, setBookedHouse] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchHouses = async () => {
            try {

                const response = await fetch("http://localhost:5001/getHouses");
                const result = await response.json();
                setHouses(result);

            } catch (error) {


            }
        };
        fetchHouses();
        const interval = setInterval(fetchHouses, 5000);
        return () => clearInterval(interval);
    }, []);




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



    useEffect(() => {
        setLoading(true);
        const fetchDataByBookedHouseUser = async () => {
            try {

                const response = await fetch(`http://localhost:5001/getBookedHouses/${user?.user_email}`);
                const result = await response.json();
                setBookedHouse(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchDataByBookedHouseUser();
        const intervalId = setInterval(fetchDataByBookedHouseUser, 30000);
        return () => clearInterval(intervalId);
    }, [user]);



    const getProductById = (house) => {
        const id = house?._id;
        fetch(`http://localhost:5001/UpdateBooked/${id}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isAvailable: false }),
        })

            .then(res => res.json()).then(result => {})
        const appendData = {
            ...house, ...user
        }
        const bookedHouse = {
            appendData
        }

        fetch("http://localhost:5001/bookHouse", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookedHouse)
        })
            .then(res => res.json())
            .then(result => {
                window.location.href='/';
                window.alert("house booked")
            })
            .catch(error => {

                console.error('Error while booking:', error)
            });

    }

    return (
        <ApiContext.Provider
            value={{
                Houses, HousesByOwner, getProductById, bookedHouse, loading
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};
