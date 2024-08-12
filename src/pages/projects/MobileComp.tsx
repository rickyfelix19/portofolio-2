import NavBar from "../../components/Common/NavBar";
import Footer from "../../components/Common/Footer";

function MobileComp() {
	return (
		<>
			<NavBar />
			<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 text-white">
				Hello World
			</div>
			<Footer />
		</>
	);
}

export default MobileComp;
