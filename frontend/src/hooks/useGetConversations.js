
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	const url = "https://chat-fwrs.onrender.com/api/users/";

	useEffect(() => {
			setLoading(true);
			axios.get(url,{ withCredentials: true })
				.then((r) => {
					setConversations(r.data);
				})
				.catch(error =>
					toast.error(error.message)
				)
				.finally(() =>
					setLoading(false)
				)
		
	}, []);

	return { loading, conversations };
};
export default useGetConversations;