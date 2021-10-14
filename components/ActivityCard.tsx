import clsx from "clsx";
import { MutableRefObject } from "react";
import useMiddle from "../hooks/useMiddle";

const ActivityCard = ({ title, description, img }) => {
	const [inMiddle, elRef] = useMiddle();

	return (
		<div
			ref={elRef as MutableRefObject<any>}
			className="w-full relative flex justify-center last:overflow-hidden card overflow-hidden"
		>
			<div className="flex flex-col z-30 relative max-w-6xl w-full pl-8 pr-8 xl:pl-0 xl:pr-0 pt-48 pb-48 text-white">
				<h3 className="text-3xl font-mont font-semibold w-full md:w-3/5">
					{title}
				</h3>
				<p className="mt-4 w-full md:w-2/3 lg:1/3 font-light">
					{description}
				</p>
			</div>
			<div className="w-full h-full absolute left-0 top-0 z-20  bg-gradient-to-r from-dark-blue to-gradient-gray" />
			<img
				className={clsx(
					"transform object-cover w-full h-full absolute left-0 top-0 z-10 transition duration-700 grayscale",
					{
						"scale-105 grayscale-0": inMiddle,
					}
				)}
				src={img}
			/>
		</div>
	);
};

export default ActivityCard;
