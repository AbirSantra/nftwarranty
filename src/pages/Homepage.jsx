import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Homepage = () => {
	return (
		<div>
			<Announcement text="Grand Opening Sale! Get 50% off on selected products" />
			<Navbar />
		</div>
	);
};

export default Homepage;
