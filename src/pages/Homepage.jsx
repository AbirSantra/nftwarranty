import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Homepage = () => {
	return (
		<div>
			<Announcement text="Grand Opening Sale! Get 50% off on selected products" />
			<Navbar />
			<Slider />
		</div>
	);
};

export default Homepage;
