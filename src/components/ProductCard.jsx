import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ imgUrl, mrp, dmrp, title, rating }) => {
	return (
		<div className="productcard group border-[1px] border-neutral-200 hover:border-primary ease-in-out duration-300 rounded-lg flex flex-col">
			{/* Product Image */}
			<img className="product--image w-full" src={imgUrl} alt="title" />
			<div className="divider w-full h-[1px] bg-neutral-200 group-hover:bg-primary duration-300 ease-in-out"></div>
			{/* Product Description */}
			<div className="description flex flex-col gap-2 p-4">
				{/* Price */}
				<div className="pricing flex items-center gap-4">
					<p className="discountedprice font-bold text-[24px] text-primary">
						${dmrp}
					</p>
					<p className="originalprice font-semibold text-neutral-400 line-through">
						${mrp}
					</p>
				</div>
				{/* Title */}
				<p className="title font-semibold text-lg">{title}</p>
				{/* Rating and Add to Cart */}
				<div className="rating--addtocart w-full flex justify-between items-center">
					{/* Rating */}
					<div className="rating--stars flex gap-1">
						<FaStar className="text-primary" />
						<FaStar className="text-primary" />
						<FaStar className="text-primary" />
						<FaStar className="text-primary" />
						<FaStar className="text-neutral-400" />
					</div>
					{/* Add to Cart */}
					<button>
						<span className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white hover:scale-105 ease-in-out duration-300">
							<MdOutlineAddShoppingCart size={24} />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
