import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import googleLogo from "../images/google logo.png";

const Authpage = () => {
	//? to store the auth types
	const [islogin, setIslogin] = useState(true);

	//? to store the input fields
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [confirm, setConfirm] = useState("");

	//! to toggle the auth state
	const toggleAuth = (e) => {
		e.preventDefault();
		setIslogin((prev) => !prev);
	};

	//! to handle the input changes
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePass = (e) => {
		setPass(e.target.value);
	};
	const handleConfirm = (e) => {
		setEmail(e.target.value);
	};

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
						<h1 className="font-bold text-3xl">
							{islogin ? "Welcome back" : "Create your account"}
						</h1>
						{/* Auth Subheader */}
						<h1 className="text-slate-400 mt-2">
							{islogin
								? "Sign in to your account below"
								: "Enter your details below"}
						</h1>
						{/* Form body */}
						<form className="flex flex-col items-center gap-4 w-full mt-8">
							<InputField
								label="Email"
								type="email"
								value={email}
								onChange={handleEmail}
							/>
							<InputField
								label="Password"
								type="password"
								value={pass}
								onChange={handlePass}
							/>
							{islogin ? null : (
								<InputField
									label="Confirm Password"
									type="password"
									value={confirm}
									onChange={handleConfirm}
								/>
							)}
							{islogin ? (
								<button className="text-sm font-semibold text-primary self-end">
									Forgot Password
								</button>
							) : null}
							<button className=" w-full bg-primary px-4 py-2 rounded-lg text-base font-semibold text-white-one hover:bg-primary-dark ease-in-out duration-200">
								<p>{islogin ? "Sign in" : "Create account"}</p>
							</button>
							<button className="w-full outline-none px-4 py-2 border border-slate-300 rounded-md text-slate-500 hover:border-primary ease-in-out duration-200 flex justify-center items-center gap-4 text-sm font-semibold">
								<img
									src={googleLogo}
									className="h-4 w-4 flex justify-center items-center"
									alt="google sign in"
								/>
								<p>Continue with Google</p>
							</button>
							<p className="mt-4 text-sm text-slate-400">
								{islogin ? "New here? " : "Already have an account? "}
								<button
									className="text-primary font-semibold"
									onClick={toggleAuth}
								>
									{islogin ? "Create account" : "Sign in"}
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
