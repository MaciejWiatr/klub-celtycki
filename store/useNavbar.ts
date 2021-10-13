import create from "zustand";

interface NavbarState {
	showNavbar: boolean;
	toggleNavbar: () => void;
	setShowNavbar: (val: boolean) => void;
}

const useNavbar = create<NavbarState>((set) => ({
	showNavbar: false,
	setShowNavbar: (val: boolean) => {
		set(() => ({ showNavbar: val }));
		document.body.classList.remove("overflow-hidden");
	},
	toggleNavbar: () => {
		set(({ showNavbar }) => ({ showNavbar: !showNavbar }));
		document.body.classList.toggle("overflow-hidden");
	},
}));

export default useNavbar;
