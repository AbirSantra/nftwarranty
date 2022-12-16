import React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InputField = ({ type, label }) => {
	//? to store the password state
	const [showpass, setShowpass] = useState(false);

	//! to toggle the password state
	const togglePass = (e) => {
		e.preventDefault();
		setShowpass((prev) => !prev);
	};

	return (
		<div className="w-full flex flex-col gap-1 text-slate-500 focus-within:text-primary">
			<p className="text-sm font-semibold">{label}</p>
			{type === "password" ? (
				<div className="w-full px-4 py-2 border border-slate-300 rounded-md text-slate-500 focus-within:border-primary flex justify-center items-center gap-2">
					<input
						type={showpass ? "text" : "password"}
						className="w-full outline-none border-none"
					/>
					<button className="" onClick={togglePass}>
						{showpass ? (
							<AiFillEye size={20} />
						) : (
							<AiFillEyeInvisible size={20} />
						)}
					</button>
				</div>
			) : (
				<div className="w-full px-4 py-2 border border-slate-300 rounded-md text-slate-500 focus-within:border-primary flex justify-center items-center gap-2">
					<input type={type} className="w-full outline-none border-none" />
				</div>
			)}
		</div>
	);
};

export default InputField;
