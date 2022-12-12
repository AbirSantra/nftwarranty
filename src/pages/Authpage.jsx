import React from "react";

const Authpage = () => {
	return (
		<div className="authpage section">
			<div className="authpage--content w-full flex justify-center items-center">
				{/* Left Section */}
				<div className="auth--form--container section w-1/2 min-h-screen">
					Login- Register form goes here
				</div>
				{/* Right Section */}
				<div className="auth--image--container section w-1/2 min-h-screen bg-neutral-100">
					Authentication Image goes here
				</div>
			</div>
		</div>
	);
};

export default Authpage;
