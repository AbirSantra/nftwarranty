import React from "react";

const InputField = ({ type, label }) => {
	return (
		<div className="w-full flex flex-col gap-1 text-slate-500 focus-within:text-primary">
			<p className="text-sm font-semibold">{label}</p>
			<input
				type={type}
				className="w-full outline-none px-4 py-2 border border-slate-300 rounded-md text-slate-500 focus:border-primary"
			/>
		</div>
	);
};

export default InputField;
