import React from "react";

// native components
import NavBar from "../../components/Home/NavBar";
import Introduction from "../../components/Home/Introduction";
import BentoBox from "../../components/Home/BentoBox";
import TextRevealDemo from "../../components/Home/TextRevealDemo";
import ContactMe from "../../components/Home/ContactMe";
import ProjectCard from "../../components/Home/ProjectCard";
import Footer from "../../components/Footer";

// magicUI Components
import LinearGradient from "../../components/magicui/linear-gradient";

function Home() {
	return (
		<div>
			<NavBar />
			<LinearGradient />
			<Introduction />
			<BentoBox />
			<TextRevealDemo />
			<ProjectCard />
			<ContactMe />
			<Footer />
		</div>
	);
}

export default Home;
