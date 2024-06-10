import { useState } from "react"
import toast from "react-hot-toast";
import axios from 'axios'
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
    const url = "http://localhost:8080/api/auth/";

    const [loading, setLoading] = useState(false);

    const {setUser}=useAuthContext();

    const navigate=useNavigate();

    const signup = (fullName, username, password, confirmPassword, gender) => {
        const success = inputErrors(fullName, username, password, confirmPassword, gender);

        if (!success) return;

        setLoading(true);
        axios.post(url + 'signup', { fullName, username, password, confirmPassword, gender },{ withCredentials: true })
        .then((r) => {
            localStorage.setItem("user", JSON.stringify(r.data));
            setUser(r.data);
            console.log(r.data);
            toast.success("Signup successful");
            navigate('/');
        })
        .catch((e)=>{
            toast.error(e.response.data.msg);
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    return { loading, signup }
}

export default useSignup;

const inputErrors = (fullName, username, password, confirmPassword, gender) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Fill all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Password must be same");
        return false;
    }

    return true;
}