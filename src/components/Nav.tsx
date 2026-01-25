"use client";

import { useState } from "react";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<nav className="navbar">
				<div className="container">
					<div className={`${isOpen ? "block" : "hidden"} md:block`}>
						<ul>
							<li>
								<a href="#home">
									<p className="text-xl">Home</p>
								</a>
							</li>
							<li>
								<a href="#about">
									<p className="text-xl">About me</p>
								</a>
							</li>
							<li>
								<a href="#experience">
									<p className="text-xl">Experience</p>
								</a>
							</li>
							<li>
								<a href="#works">
									<p className="text-xl">Works</p>
								</a>
							</li>
							<li>
								<a href="#beyond">
									<p className="text-xl">Beyond</p>
								</a>
							</li>
							<li>
								<a href="#contact">
									<p className="text-xl">Contact</p>
								</a>
							</li>
							<li>
								<a
									href="/assets/resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-xl">Resume</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
