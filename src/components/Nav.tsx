"use client";

import { useState } from "react";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const items = [
		"Home",
		"About_me",
		"Experience",
		"Works",
		"Beyond",
		"Contact",
		"Resume",
	];

	return (
		<header>
			<nav className="navbar">
				<div className="container">
					{/* Hamburger button - visible only on mobile */}
					<button
						className="md:hidden hamburger-btn"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle navigation"
						aria-expanded={isOpen}
					>
						<div className={`hamburger ${isOpen ? "open" : ""}`}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>

					{/* Navigation menu */}
					<div className={`${isOpen ? "block" : "hidden"} md:block`}>
						<ul>
							{items.map((item) => (
								<li key={item}>
									<a
										className="font-mono"
										href={
											item === "Resume"
												? "/assets/resume.pdf"
												: `#${item.toLowerCase()}`
										}
										target={
											item === "Resume"
												? "_blank"
												: undefined
										}
										rel={
											item === "Resume"
												? "noopener noreferrer"
												: undefined
										}
										onClick={() => setIsOpen(false)}
									>
										<p className="text-xl">{item}</p>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
