import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const SignUpPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const { signUp } = useContext(UserContext);

	return (
		<div className="flex flex-col justify-center items-center min-h-[94vh] relative">
			<Link to="/">
				<svg
					className="absolute top-5 left-5 w-10 h-10"
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 448 512"
				>
					<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
				</svg>
			</Link>
			<h1>Sign Up Page </h1>
			<input
				className="border-2 p-2 m-2 "
				type="text"
				placeholder="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className="border-2 p-2 m-2 "
				type="password"
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input
				className="border-2 p-2 m-2 "
				type="text"
				placeholder="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<button
				className="border-2 p-2 m-2 bg-blue-600 text-white"
				onClick={() => signUp(email, password, name)}
			>
				SignUp
			</button>
			<h1>
				Already have an account ?{" "}
				<Link className="underline" to="/login">
					Login
				</Link>
			</h1>
		</div>
	);
};
export default SignUpPage;
