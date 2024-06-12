import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

//using below code we can use this useSocketContext anywhere in frontend same as useAuthContext
export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            const socket = io("http://localhost:8080", {
                query: { //sending user id to backend using socket, ref to socket.js in backend
                    userId: user._id,
                }
            })
            setSocket(socket);

            //getOnlineUser coming from backend socket.js and Object.keys(userSocketMap) is received as args in callback function
            socket.on("getOnlineUser", (users) => {
                setOnlineUsers(users)
            })

            return () => {
                socket.close();
            }
        }
        else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [user])
    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
}