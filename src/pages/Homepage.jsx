import React from "react";
import Announcement from "../components/Announcement";
import BestDeals from "../components/BestDeals";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Homepage = () => {
	return (
		<div>
			<Announcement text="Grand Opening Sale! Get 50% off on selected products" />
			<Navbar />
			<Slider />
			<Categories />
			<BestDeals />
		</div>
	);
};

export default Homepage;
