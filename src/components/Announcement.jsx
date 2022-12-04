import React from "react";

const Announcement = ({ text }) => {
	return (
		<div className="w-full flex justify-center items-center p-2 bg-primary text-white">
			<p className="animate-pulse font-medium text-base">{text}</p>
		</div>
	);
};

export default Announcement;
