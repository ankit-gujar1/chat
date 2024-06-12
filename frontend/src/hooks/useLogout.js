import axios from 'axios';
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {

    const url = "https://chat-fwrs.onrender.com/api/auth/";

    const {setUser}=useAuthContext();

    const [loading, setLoading] = useState(false);

    const logout = () => {
        setLoading(true);
        axios.post(url+'logout')
        .then(()=>{
            localStorage.removeItem('user');
            setUser(null);

        })
        .catch((e)=>{
            console.log(e);
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    return {loading,logout}
}

export default useLogout;
