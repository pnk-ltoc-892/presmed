import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors, setDoctors] = useState([])


    const getAllDoctors = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list')
            if(data.success){
                setDoctors(data.doctors)
                // toast.success("Doctor Data Fetched")
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log("Error While Fetching Doctors: ", error);
            toast.error(error.message)
        }
    }
    useEffect(() => {
        getAllDoctors()
    }, [])
    

    const [userToken, setUserToken] = useState(localStorage.getItem('userToken') ? localStorage.getItem('userToken') : false)


    const currencySymbol = '$'
    
    const value = {
        doctors,
        currencySymbol,
        userToken,
        setUserToken,
        backendUrl
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider