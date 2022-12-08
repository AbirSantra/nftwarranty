import React from "react";

const CategoryCard = ({ label }) => {
	return (
		<div className="w-full flex justify-center items-center rounded-lg p-4 border border-primary font-semibold text-primary cursor-pointer hover:bg-primary hover:text-white ease-in-out duration-300">
			{label}
		</div>
	);
};

export default CategoryCard;
