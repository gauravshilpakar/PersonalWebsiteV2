"use client";

import {
	faAngular,
	faCss3,
	faHtml5,
	faJava,
	faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface Experience {
	id: number;
	location: string;
	title: string;
	date: string;
	description: string[];
	technologies: string[] | string;
}

const iconMap: { [key: string]: any } = {
	java: faJava,
	database: faDatabase,
	angular: faAngular,
	html5: faHtml5,
	css3: faCss3,
	python: faPython,
};

export default function Experience() {
	const [experiences, setExperiences] = useState<Experience[]>([]);

	useEffect(() => {
		fetch("/assets/experiences.json")
			.then((response) => response.json())
			.then((data) => setExperiences(data.reverse()))
			.catch((error) =>
				console.error("Error loading experiences:", error),
			);
	}, []);

	return (
		<div className="container" id="experience">
			<div className="row">
				<div
					className="col-xs-12 section-container-spacer"
					style={{ maxWidth: "800px", margin: "0 auto" }}
				>
					<div className="text-center">
						<h2>Experience</h2>
					</div>
					<div
						style={{
							borderLeft: "2px solid white",
							paddingLeft: "20px",
							marginTop: "40px",
						}}
					>
						<ul className="timeline">
							{experiences.map((exp) => (
								<li key={exp.id}>
									<h5>{exp.date}</h5>
									<div>
										<h3>{exp.location}</h3>
									</div>
									<h4 className="underline">{exp.title}</h4>

									{exp.description.map((desc, index) => (
										<div
											key={index}
											className="container text-lg p-10"
										>
											<span> - {desc}</span>
										</div>
									))}
									{exp.technologies &&
										Array.isArray(exp.technologies) &&
										exp.technologies.length > 0 && (
											<h5
												style={{
													display: "flex",
													alignItems: "center",
												}}
											>
												import
												<div
													style={{
														display: "flex",
														flexWrap: "wrap",
														marginLeft: "15px",
														gap: "10px",
													}}
												>
													{exp.technologies.map(
														(tech, index) => (
															<span key={index}>
																{tech}
																{index !=
																exp.technologies
																	.length -
																	1
																	? ","
																	: ""}
															</span>
														),
													)}
												</div>
											</h5>
										)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
