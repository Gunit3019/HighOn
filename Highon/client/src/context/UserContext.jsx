import { createContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState({});
	const [posts, setPosts] = useState([]);
	const URL = "http://localhost:4000";

	const navigate = useNavigate();
	const fetchPosts = async () => {
		try {
			const response = await axios.get(`${URL}/user/getPosts`, {});
			console.log(response.data.posts);
			setPosts(response.data.posts);
		} catch (err) {
			console.log("Error while fetching posts");
		}
	};
	useEffect(() => {
		fetchPosts();
		console.log(userData);
	}, []);
	const user = {
		id: 1,
		name: "John Doe",
		likedPost: [1, 2, 5],
		posts: [2, 3, 5],
	};

	const isLiked = (post) => {
		if (JSON.parse(localStorage.getItem("user_info"))) {
			const user = JSON.parse(localStorage.getItem("user_info")).user;
			return user.likedPosts.includes(post._id);
		}
	};

	const login = async (email, password) => {
		console.log("login funciton hit");
		try {
			const res = await axios.post(`${URL}/user/login`, {
				email,
				password,
			});
			// console.log(res.data);
			localStorage.setItem("user_info", JSON.stringify(res.data));
			setUserData(res.data.user);
			console.log(res.data.user);
			console.log(userData);
			toast.success("Login Seccessful");
			navigate("/");
		} catch (err) {
			console.log(err);
			toast.error("Error while logging in!");
		}
	};

	const signUp = async (email, password, name) => {
		try {
			const res = await axios.post(`${URL}/user/signup`, {
				email,
				password,
				name,
			});
			console.log(res.data);
			navigate("/login");
			toast.success("Signup Successful");
		} catch (err) {
			console.log(err);
			toast.error("Error signing up!");
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				isLiked,
				login,
				signUp,
				userData,
				setUserData,
				posts,
				setPosts,
				fetchPosts,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
