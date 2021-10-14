import { useState, useRef, useEffect } from "react";

const useMiddle = () => {
	const [inMiddle, setMiddle] = useState(false);
	const vh = useRef(0);
	const elRef = useRef(null);

	const handleScrolling = () => {
		const pos = elRef.current.getBoundingClientRect().top;
		const height = elRef.current.getBoundingClientRect().height;
		const middle = vh.current / 2;

		if (middle > pos && middle < pos + height) {
			setMiddle(true);
		} else {
			setMiddle(false);
		}
	};

	useEffect(() => {
		vh.current = document.documentElement.clientHeight;
		handleScrolling();
		window.addEventListener("resize", () => {
			vh.current = document.documentElement.clientHeight;
		});
		window.addEventListener("scroll", handleScrolling);

		return () => {
			window.removeEventListener("resize", () => {
				vh.current = document.documentElement.clientHeight;
			});
			window.removeEventListener("scroll", handleScrolling);
		};
	}, []);

	return [inMiddle, elRef];
};

export default useMiddle;
