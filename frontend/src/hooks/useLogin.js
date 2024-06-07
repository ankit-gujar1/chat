import { useState } from "react"
import toast from "react-hot-toast";
import axios from 'axios'
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const url = "http://localhost:8080/api/auth/";

    const [loading, setLoading] = useState(false);

    const {setUser}=useAuthContext();

    const navigate=useNavigate();

    const login = (username, password) => {
        const success = inputErrors(username, password);

        if (!success) return;

        setLoading(true);
        axios.post(url + 'login', { username, password })
        .then((r) => {
            toast.success("Login successful");
            localStorage.setItem("user", JSON.stringify(r.data));
            setUser(r.data);
            console.log(r.data);
            navigate('/');
        })
        .catch((e)=>{
            toast.error(e.response.data.msg);
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    return { loading, login }
}

export default useLogin;

const inputErrors = (username, password) => {
    if (!username || !password) {
        toast.error("Fill all fields");
        return false;
    }

    return true;
}
