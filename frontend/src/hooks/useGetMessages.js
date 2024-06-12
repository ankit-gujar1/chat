import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import axios from 'axios';

const useGetMessages = () => {
    const url="http://localhost:8080/api/message/";

    const {selectedConversation,messages,setMessages}=useConversation();

    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);

        axios.get(url+selectedConversation._id,{withCredentials:true})
        .then((r)=>{
            // console.log(r.data);
            setMessages(r.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[selectedConversation?._id,setMessages])

    return {loading,messages}
}

export default useGetMessages
