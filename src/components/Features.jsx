import React from "react";
import { FiTruck } from "react-icons/fi";
import {
	MdOutlineDocumentScanner,
	MdOutlineAssignmentReturn,
	MdOutlineCreditCard,
} from "react-icons/md";
const Features = () => {
	return (
		<div className="features section mt-16">
			<div className="features--content section--content mt-8 grid grid-cols-4 gap-8">
				<div className="feature--card w-full border-[2px] border-primary-extralight rounded-lg p-6 flex justify-center items-center gap-4">
					<FiTruck size={48} className="text-primary" />
					<div className="feature--info flex flex-col">
						<p className="title font-bold text-xl">Free Shipping</p>
						<p className="subtitle text-sm font-medium text-neutral-400">
							Free shipping on all orders above $500
						</p>
					</div>
				</div>
				<div className="feature--card w-full border-[2px] border-primary-extralight rounded-lg p-6 flex justify-center items-center gap-4">
					<MdOutlineDocumentScanner size={48} className="text-primary" />
					<div className="feature--info flex flex-col">
						<p className="title font-bold text-xl">NFT Warranty</p>
						<p className="subtitle text-sm font-medium text-neutral-400">
							Get your products warranty as an NFT
						</p>
					</div>
				</div>
				<div className="feature--card w-full border-[2px] border-primary-extralight rounded-lg p-6 flex justify-center items-center gap-4">
					<MdOutlineAssignmentReturn size={48} className="text-primary" />
					<div className="feature--info flex flex-col">
						<p className="title font-bold text-xl">Easy Returns</p>
						<p className="subtitle text-sm font-medium text-neutral-400">
							Easy 7 days return & replacement policy
						</p>
					</div>
				</div>
				<div className="feature--card w-full border-[2px] border-primary-extralight rounded-lg p-6 flex justify-center items-center gap-4">
					<MdOutlineCreditCard size={48} className="text-primary" />
					<div className="feature--info flex flex-col">
						<p className="title font-bold text-xl">Secure Checkout</p>
						<p className="subtitle text-sm font-medium text-neutral-400">
							Secure & trusted payment gateway
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
