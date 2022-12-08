import React from "react";
import productImage from "../images/airdopes.png";
import ProductCard from "./ProductCard";

const BestDeals = () => {
	return (
		<div className="bestdeals section mt-16">
			<div className="bestdeals--content section--content flex flex-col gap-8">
				{/* Section Header */}
				<div className="section--header text-2xl font-semibold">
					Today's Best Deals
				</div>
				{/* Product Grid */}
				<div className="w-full grid grid-cols-4 gap-8">
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
					<ProductCard
						imgUrl={productImage}
						mrp="32.00"
						dmrp="15.00"
						title="TRebel Boat Airdopes 141"
						rating="4"
					/>
				</div>
			</div>
		</div>
	);
};

export default BestDeals;
