import React from "react";

const Footer = () => {
	const menuItems = ["About Me", "Projects", "Download Resume"];
	// const socialLinks = [{ href: "#", icon: "fab fa-github" }];
	const policyLinks = ["Privacy Policy", "Terms & Conditions"];

	return (
		<footer className="bg-gray-800 py-8 mt-10">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-white text-3xl font-bold mb-6">
					Drop me a line or two, I am open for a chat and collaborations!
				</h2>
				<button className="bg-black text-white py-3 px-8 rounded-full font-medium text-lg shadow-lg hover:bg-gray-800 transition mb-10">
					Contact Me!
				</button>

				{/* Menu Items */}
				<div className="mt-10 flex justify-center space-x-20">
					{menuItems.map((item, index) => (
						<a
							key={index}
							href="#"
							className="text-white hover:text-black transition"
						>
							{item}
						</a>
					))}
				</div>

				{/* Social Links */}
				{/* <div className="mt-10 flex justify-center space-x-4">
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="text-white hover:text-black transition"
						>
							<i className={link.icon}></i>
						</a>
					))}
				</div> */}

				<div className="mt-8 text-white">
					This website is mainly created using React.js, Tailwind.css, and
					MagicUI and is under constant improvements!
				</div>

				{/* Policy Links */}
				{/* <div className="mt-4 flex justify-center space-x-6 text-white">
					{policyLinks.map((link, index) => (
						<a key={index} href="#" className="hover:text-black transition">
							{link}
						</a>
					))}
				</div> */}
			</div>
		</footer>
	);
};

export default Footer;
