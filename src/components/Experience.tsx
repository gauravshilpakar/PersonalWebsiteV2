"use client";

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface Experience {
	id: number;
	location: string;
	title: string;
	date: string;
	description: string[];
	technologies: string[];
}

export default function Experience() {
	const [experiences, setExperiences] = useState<Experience[]>([]);

	useEffect(() => {
		fetch("/assets/data/experiences.json")
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
									<h5>
										<FontAwesomeIcon icon={faCalendarAlt} />
										{exp.date}
									</h5>
									<div>
										<h3>{exp.location}</h3>
									</div>
									<h4 className="underline">{exp.title}</h4>
									{exp.description.map((desc, index) => (
										<div key={index} className="text-lg">
											<span> - {desc}</span>
										</div>
									))}
									{exp.technologies &&
										exp.technologies.length > 0 && (
											<div className="text-md font-mono flex gap-1 text-orange-300">
												{exp.technologies && (
													<p>
														import {""}
														{exp.technologies.map(
															(tech, index) => (
																<span
																	key={index}
																>
																	{tech}
																	{index !=
																	exp
																		.technologies
																		.length -
																		1
																		? ","
																		: " "}
																</span>
															),
														)}
													</p>
												)}
											</div>
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
