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
	return (
		<>
			<NavBar />
			<Introduction />
			<BentoBox />
			<TextRevealTagline />
			<ProjectCard />
			{/* <ContactMe /> */}
			<Footer />
		</>
	);
}

export default Home;
