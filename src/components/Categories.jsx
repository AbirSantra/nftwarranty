import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<div className="categories section mt-16">
			<div className="categories--content section--content flex flex-col gap-8">
				{/* Section Header */}
				<div className="section--header text-2xl font-semibold">
					Shop by Categories
				</div>
				{/* Category Cards */}
				<div className="category--card--container w-full flex justify-center items-center gap-4">
					<CategoryCard label="SmartPhones" />
					<CategoryCard label="Tablets" />
					<CategoryCard label="Laptops" />
					<CategoryCard label="Headphones" />
					<CategoryCard label="Powerbanks" />
				</div>
			</div>
		</div>
	);
};

export default Categories;
