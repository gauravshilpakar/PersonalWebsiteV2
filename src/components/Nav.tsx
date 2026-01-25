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
