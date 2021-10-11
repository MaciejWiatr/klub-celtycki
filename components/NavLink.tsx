import Link from "next/link";

export const NavLink = ({ href, children }) => {
	return (
		<Link href={href}>
			<span className="hover:text-primary-orange transition cursor-pointer">
				{children}
			</span>
		</Link>
	);
};
