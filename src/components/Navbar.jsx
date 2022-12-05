import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
	return (
		<nav className="navbar section">
			<div className="navbar--content section--content h-[80px] flex justify-between items-center">
				{/* Left Section */}
				<div className="flex justify-center items-center gap-8">
					{/* Logo */}
					<h1 className="font-bold text-2xl text-black-one">CompanyName</h1>
					{/* Categories */}
					<div className="flex justify-center items-center">
						<p>Categories</p>
						<BiChevronDown size={20} />
					</div>
				</div>
				{/* Right Section */}
				<div>
					{/* Search Bar */}
					{/* Links */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
