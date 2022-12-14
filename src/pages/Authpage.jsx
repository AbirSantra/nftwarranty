import React from "react";
import { Link } from "react-router-dom";

const Authpage = () => {
	return (
		<div className="authpage section">
			<div className="authpage--content w-full flex justify-center items-center">
				{/* Left Section */}
				<div className="auth--form--container flex-1 flex flex-col justify-between min-h-screen px-16 py-8">
					{/* Company Logo */}
					<Link to="/home" className="font-bold text-2xl text-black-one">
						Shopus
					</Link>
					{/* Form */}
					<div className="authform">
						<h1>Sign in to your account</h1>
					</div>
					{/* Copyright */}
					<p className="text-grey-three">
						Shopus &copy; {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
				{/* Right Section */}
				<div className="auth--image--container section flex-1 min-h-screen bg-slate-100 p-16">
					<span className="circle h-40 w-40 bg-primary shadow-lg rounded-full animate-bounce"></span>
				</div>
			</div>
		</div>
	);
};

export default Authpage;
