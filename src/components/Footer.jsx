import React from "react";

const Footer = () => {
	return (
		<footer className="footer section w-full flex flex-col justify-center items-center bg-white text-black-one mt-16">
			<div className="footer--divider h-[1px] w-full bg-grey-one"></div>
			<div className="footer--container section--content flex justify-center items-center py-20">
				<div className="footer--content w-full flex justify-between items-start">
					<div className="footer--details flex flex-col justify-start items-start gap-4">
						<h1 className="font-bold text-2xl text-black-one">ShopUs</h1>
						<p className="max-w-[300px] font-light text-sm text-neutral-400">
							Company is an online store which issues product warranties as
							NFTs.
						</p>
						<p className="max-w-[300px] text-sm text-grey-three">
							Shopus &copy; {new Date().getFullYear()}. All rights reserved.
						</p>
					</div>
					<div className="footer--links flex justify-center items-start gap-16">
						<div className="flex flex-col justify-start items-start">
							<h4 className="mb-2 font-bold">Company</h4>
							<p className="text-sm text-grey-three">Terms</p>
							<p className="text-sm text-grey-three">Privacy Policy</p>
							<p className="text-sm text-grey-three">Contact</p>
						</div>
						<div className="flex flex-col justify-start items-start">
							<h4 className="mb-2 font-bold">Category</h4>
							<p className="text-sm text-grey-three">SmartPhones</p>
							<p className="text-sm text-grey-three">Tablets</p>
							<p className="text-sm text-grey-three">Laptops</p>
							<p className="text-sm text-grey-three">Headphones</p>
							<p className="text-sm text-grey-three">Powerbanks</p>
						</div>
						<div className="flex flex-col justify-start items-start">
							<h4 className="mb-2 font-bold">Connect</h4>
							<p className="text-sm text-grey-three">Facebook</p>
							<p className="text-sm text-grey-three">Twitter</p>
							<p className="text-sm text-grey-three">Linkedin</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer--message py-4 w-full flex justify-center items-center bg-primary text-white text-sm">
				Crafted with ❤️ by Team INCOGNI70
			</div>
		</footer>
	);
};

export default Footer;
