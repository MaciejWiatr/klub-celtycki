import create from "zustand";

interface NavbarState {
	showNavbar: Boolean;
	toggleNavbar: () => void;
}

const useNavbar = create<NavbarState>((set) => ({
	showNavbar: false,
	toggleNavbar: () => {
		set(({ showNavbar }) => ({ showNavbar: !showNavbar }));
		document.body.classList.toggle("overflow-hidden");
	},
}));

export default useNavbar;
