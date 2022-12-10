import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="home" />} />
				<Route path="/home" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
