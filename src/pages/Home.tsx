import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// native components
import NavBar from "../components/Common/NavBar";
import Introduction from "../components/Home/Introduction";
import BentoBox from "../components/Home/BentoBox";
import TextRevealTagline from "../components/Home/TextRevealTagline";
// import ContactMe from "../components/Home/ContactMe";
import ProjectCard from "../components/Home/ProjectCard";
import Footer from "../components/Common/Footer";

// magicUI Components
// import LinearGradient from "../components/magicui/linear-gradient";

function Home() {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element = document.getElementById(hash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);
	return (
		<>
			<NavBar />
			<div id="sectionAbout">
				<Introduction />
			</div>
			<BentoBox />
			<TextRevealTagline />
			<div id="sectionProject">
				<ProjectCard />
			</div>
			{/* <ContactMe /> */}
			<Footer />
		</>
	);
}

export default Home;
