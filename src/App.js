import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route, Navigate } from "react-router-dom";
import Authpage from "./pages/Authpage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="home" />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/auth" element={<Authpage />} />
			</Routes>
		</div>
	);
}

export default App;
