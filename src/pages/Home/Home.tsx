import React from "react";

// native components
import NavBar from "../../components/NavBar";
import Introduction from "../../components/Introduction";
import BentoBox from "../../components/BentoBox";

// magicUI Components
import LinearGradient from "../../components/magicui/linear-gradient";

function Home() {
	return (
		<div>
			<NavBar />
			<LinearGradient />
			<Introduction />
			<BentoBox />
		</div>
	);
}

export default Home;
