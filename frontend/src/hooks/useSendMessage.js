import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import axios from 'axios';

const useSendMessage = () => {
    const url="http://localhost:8080/api/message/";

    const {messages,setMessages,selectedConversation}=useConversation();
    const [loading,setLoading]=useState(false);

    // useEffect(() => {
    //     console.log(messages);
    // }, [messages]);

    const sendMessage=(message)=>{
        setLoading(true);

        axios.post(url+'send/'+selectedConversation._id,{message},{ withCredentials: true })
        .then((r)=>{
            //why r.data.newMessage? 
            // r.data gives object and inside that object there's newMessage and inside there's data we needed shown below
            // Object {
            //     "newMessage": {
            //       "senderId": "66519b3e5f4aa8f3f7382418",
            //       "receiverId": "66605d38518c29d3be67a853",
            //       "message": "hh",
            //       "_id": "6665be7dbbbc16a93019972c",
            //       "createdAt": "2024-06-09T14:38:53.522Z",
            //       "updatedAt": "2024-06-09T14:38:53.522Z",
            //       "__v": 0
            //     }
            // }

            // r.data.newMessage give directly the data we needed
            //       "senderId": "66519b3e5f4aa8f3f7382418",
            //       "receiverId": "66605d38518c29d3be67a853",
            //       "message": "hh",
            //       "_id": "6665be7dbbbc16a93019972c",
            //       "createdAt": "2024-06-09T14:38:53.522Z",
            //       "updatedAt": "2024-06-09T14:38:53.522Z",
            //       "__v": 0
            setMessages([...messages,r.data.newMessage]); 
            console.log(messages);
        })
        .catch((e)=>{
            console.log(e);
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    return {loading,sendMessage}
}

export default useSendMessage
