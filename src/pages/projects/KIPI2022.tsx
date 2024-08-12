import React from "react";

function BlogPost() {
	return (
		<div className="max-w-4xl mx-auto p-8">
			{/* Header */}
			<header className="mb-8 text-center">
				<h1 className="text-4xl font-bold mb-4 text-white">
					Understanding Progressive Web Apps (PWA)
				</h1>
				<p className="text-white">August 12, 2024 • 5 min read</p>
			</header>

			{/* Image */}
			<div className="mb-8">
				<img
					src="https://via.placeholder.com/800x400"
					alt="Blog Post Cover"
					className="w-full rounded-lg object-cover"
				/>
			</div>

			{/* Content */}
			<article className="prose prose-lg max-w-none text-white">
				<p>
					Progressive Web Apps (PWAs) are web applications that use modern web
					capabilities to deliver an app-like experience to users. They are
					reliable, fast, and engaging, blurring the line between web and native
					apps.
				</p>
				<h2>What is a Progressive Web App?</h2>
				<p>
					A PWA is a web application that can be installed on your device and
					work offline, providing a native-like experience on the web. PWAs
					leverage technologies like service workers, manifest files, and HTTPS
					to provide a reliable, fast, and engaging user experience.
				</p>
				<h2>Key Features of PWAs</h2>
				<ul>
					<li>Offline Support</li>
					<li>Responsive Design</li>
					<li>App-like Interface</li>
					<li>Push Notifications</li>
					<li>Secure Connections</li>
				</ul>
				<p>
					By implementing these features, PWAs provide a user experience that is
					on par with native apps while still being accessible through a
					browser.
				</p>
				<h2>How to Build a PWA</h2>
				<p>
					Building a PWA involves creating a web app that adheres to the PWA
					standards and best practices. This includes setting up a manifest
					file, registering a service worker, and ensuring your site is served
					over HTTPS.
				</p>
				<blockquote>
					<p>
						"The web is the most powerful platform we have. PWAs enable us to
						unlock the full potential of the web for users and developers."
					</p>
				</blockquote>
				<p>
					If you follow these steps, you'll be able to create a PWA that
					provides a fast, reliable, and engaging user experience.
				</p>
			</article>

			{/* Footer */}
			<footer className="mt-16 text-center">
				<p className="text-gray-600">
					Written by <span className="font-semibold">John Doe</span>
				</p>
			</footer>
		</div>
	);
}

export default BlogPost;
