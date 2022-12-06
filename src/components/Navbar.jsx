import React from "react";
import { useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
	const categories = [
		{ label: "Smartphones", link: "" },
		{ label: "Tablets", link: "" },
		{ label: "Laptops", link: "" },
		{ label: "Headphones", link: "" },
		{ label: "Speakers", link: "" },
		{ label: "Chargers", link: "" },
	];

	//? to store category menu state
	const [catMenu, setCatMenu] = useState(false);

	//! to toggle the category menu state
	const toggleCatMenu = () => {
		setCatMenu((prev) => !prev);
	};

	return (
		<nav className="navbar section">
			<div className="navbar--content section--content h-[80px] flex justify-between items-center">
				{/* Left Section */}
				<div className="relative flex justify-center items-center gap-8">
					{/* Logo */}
					<h1 className="font-bold text-2xl text-black-one">CompanyName</h1>
					{/* Categories */}
					<div
						className="flex justify-center items-center cursor-pointer"
						onClick={toggleCatMenu}
					>
						<p className="font-semibold">Categories</p>
						<button>
							<BiChevronDown size={20} />
						</button>
					</div>
					{/* Dropdown Menu */}
					{catMenu ? (
						<div className="absolute top-12 right-0 w-[200px] rounded-md border border-neutral-200 p-4 flex flex-col gap-2">
							{categories.map((cat) => (
								<div
									key={cat.label}
									className="py-2 px-2 font-medium hover:text-primary ease-in-out duration-300 cursor-pointer hover:bg-neutral-50 rounded-sm"
								>
									<p>{cat.label}</p>
								</div>
							))}
						</div>
					) : null}
				</div>
				{/* Right Section */}
				<div className="flex justify-center items-center gap-8">
					{/* Search Bar */}
					<div className="w-[400px] h-[40px] px-4 flex justify-center items-center gap-4 rounded-lg bg-neutral-100">
						<input
							className="w-full text-sm border-none outline-none bg-transparent"
							type="text"
							placeholder="Search products"
						/>
						<button className="cursor-pointer text-neutral-400 hover:text-primary ease-in-out duration-200">
							<BiSearch size={20} />
						</button>
					</div>
					{/* Links */}
					<div className="flex justify-center items-center gap-8">
						{/* Account */}
						<div className="flex justify-center items-center gap-2 hover:text-primary ease-in-out duration-300 cursor-pointer">
							<HiOutlineUser size={19} className="text-primary" />
							<p className="font-semibold">Account</p>
						</div>
						{/* Cart */}
						<div className="flex justify-center items-center gap-2 hover:text-primary ease-in-out duration-300 cursor-pointer">
							<MdOutlineShoppingCart size={20} className="text-primary" />
							<p className="font-semibold">Cart</p>
							<span className="w-8 h-8 p-2 rounded-full bg-primary flex justify-center items-center text-white font-medium">
								0
							</span>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
