import create from "zustand";

interface NavbarState {
	showNavbar: Boolean;
	toggleNavbar: () => void;
	setShowNavbar: (val: boolean) => void;
}

const useNavbar = create<NavbarState>((set) => ({
	showNavbar: false,
	setShowNavbar: (val: boolean) => {
		set(() => ({ showNavbar: val }));
	},
	toggleNavbar: () => {
		set(({ showNavbar }) => ({ showNavbar: !showNavbar }));
		document.body.classList.toggle("overflow-hidden");
	},
}));

export default useNavbar;
