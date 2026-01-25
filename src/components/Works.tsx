"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Work {
	id: number;
	title: string;
	description: string;
	github: string;
	link: string;
	path: string;
	techstack: string;
}

export default function Works() {
	const [works, setWorks] = useState<Work[]>([]);

	useEffect(() => {
		fetch("/assets/works.json")
			.then((response) => response.json())
			.then((data) => {
				// Sort by id
				const sorted = data.sort((a: Work, b: Work) => a.id - b.id);
				setWorks(sorted);
			})
			.catch((error) => console.error("Error loading works:", error));
	}, []);

	return (
		<div className="section-container" id="works">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="section-container-spacer text-center">
							<h2>Works</h2>
						</div>
						<div
							className="row"
							style={{ gap: "30px", justifyContent: "center" }}
						>
							{works.map((work) => (
								<div
									key={work.id}
									className="work-card"
									style={{
										border: "1px solid #fcf8e3",
										padding: "20px",
										maxWidth: "350px",
										width: "100%",
									}}
								>
									{work.path && (
										<Image
											src={`/assets/img/${work.path}`}
											alt={work.title}
											width={350}
											height={200}
											className="img-responsive"
											style={{ marginBottom: "15px" }}
										/>
									)}
									<h3>{work.title}</h3>
									<p
										className="text-xl"
										style={{
											margin: "15px 0",
											minHeight: "60px",
										}}
									>
										{work.description}
									</p>
									<p
										className="text-xl"
										style={{
											color: "#aaa",
											marginBottom: "15px",
										}}
									>
										<strong>Tech:</strong> {work.techstack}
									</p>
									<div
										style={{ display: "flex", gap: "15px" }}
									>
										{work.github && (
											<a
												href={work.github}
												target="_blank"
												rel="noopener noreferrer"
												className="fa-icon-white text-xl"
											>
												<FontAwesomeIcon
													icon={faGithub}
												/>{" "}
												GitHub
											</a>
										)}
										{work.link && (
											<a
												href={work.link}
												target="_blank"
												rel="noopener noreferrer"
												className="fa-icon-white text-xl"
											>
												<FontAwesomeIcon
													icon={faExternalLinkAlt}
												/>{" "}
												Demo
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
