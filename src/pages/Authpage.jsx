import React from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

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
					<div className="authform w-full max-w-[400px] self-center">
						{/* Auth Header */}
						<h1 className="font-bold text-3xl">Welcome back</h1>
						{/* Auth Subheader */}
						<h1 className="text-slate-400 mt-2">
							Sign in to your account below
						</h1>
						{/* Form body */}
						<form className="flex flex-col items-center gap-4 w-full mt-8">
							<InputField label="Email" type="email" />
							<InputField label="Password" type="password" />
							<button className="mt-2 w-full bg-primary px-4 py-2 rounded-lg font-semibold text-white-one hover:bg-primary-dark ease-in-out duration-200">
								Sign in
							</button>
							<p className="mt-4 text-sm text-slate-400">
								New here?{" "}
								<button className="text-primary font-medium">
									Create an account
								</button>
							</p>
						</form>
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
