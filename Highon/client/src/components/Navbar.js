import React, { useContext } from "react";
import Logo from "../resources/Logo.jpg";
import add from "../resources/add.svg";
import search from "../resources/search.svg";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from "react-hot-toast";

const Navbar = () => {
	const { userData, setUserData } = useContext(UserContext);

	const handleLogout = () => {
		setUserData(null);
		localStorage.removeItem("user_info");
		toast.success("Logged out!");
	};

	return (
		<div className="flex justify-around items-center mt-10 sticky mx-auto w-11/12">
			<div>
				<img src={Logo} alt="Highon" className="w-20" />
			</div>
			<div className="flex">
				<Link to="/create">
					<button>
						<img src={add} className="w-10 rounded-2xl p-1" alt="" />
					</button>
				</Link>

				<img src={search} className="w-10 p-1" alt="" />
			</div>
			<div>
				{!userData ? (
					<Link to="/login">Login</Link>
				) : (
					<button onClick={handleLogout} className="h-4 w-4 mr-5">
						Logout
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
