import clsx from "clsx";
import { useState } from "react";

const ActivityCard = ({ title, description, img }) => {
	return (
		<div className="w-full relative flex justify-center">
			<div className="flex flex-col z-30 relative max-w-6xl w-full pl-8 pr-8 lg:pl-0 lg:pr-0 pt-48 pb-48 text-white">
				<h3 className="text-3xl font-mont font-semibold w-full md:w-3/5">
					{title}
				</h3>
				<p className="mt-4 w-full md:w-1/3 font-light">{description}</p>
			</div>
			<div className="w-full h-full absolute left-0 top-0 z-20  bg-gradient-to-r from-dark-blue to-gradient-gray" />
			<img
				className="transform object-cover w-full h-full absolute left-0 top-0 z-10 transition duration-500"
				src={img}
			/>
		</div>
	);
};

export default ActivityCard;
