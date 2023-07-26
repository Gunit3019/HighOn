import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Create from "./components/Create";
import CreatePost from "./components/CreatePost";
import CreateStory from "./components/CreateStory";
import Gallery from "./components/Gallery";
import PostDesc from "./components/PostDesc";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<div>
			<Toaster position="top-center" reverseOrder={true} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/post" element={<Posts />} />
				<Route path="/create" element={<Create />} />
				<Route path="/create/createPost" element={<CreatePost />} />
				<Route path="/create/createStory" element={<CreateStory />} />
				<Route path="/create/createPost/gallery" element={<Gallery />} />
				<Route
					path="/create/createPost/gallery/upload/postDesc"
					element={<PostDesc />}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</div>
	);
}

export default App;
