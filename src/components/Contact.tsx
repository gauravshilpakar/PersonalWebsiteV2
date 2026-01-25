"use client";

import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faPhone,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface SocialLinkData {
	icon: string;
	url: string;
	title: string;
}

interface SocialLink {
	icon: IconDefinition;
	url: string;
	title: string;
}

const iconMap: { [key: string]: IconDefinition } = {
	faFacebook,
	faTwitter,
	faLinkedin,
	faGithub,
	faInstagram,
};

export default function Contact() {
	const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
	useEffect(() => {
		fetch("/assets/data/socialLinks.json")
			.then((response) => response.json())
			.then((data: SocialLinkData[]) => {
				const mappedLinks = data.map((link) => ({
					...link,
					icon: iconMap[link.icon],
				}));
				setSocialLinks(mappedLinks);
			})
			.catch((error) =>
				console.error("Error loading social links:", error),
			);
	}, []);

	return (
		<div className="section-container" id="contact">
			<div className="row">
				<div className="col-xs-12">
					<div className="text-center">
						<h2>Contact</h2>
					</div>
					<div className="gap-5 flex flex-col text-center w-full">
						<ul className="list-unstyled text-xl">
							<li
								style={{
									marginBottom: "15px",
								}}
							>
								<span className="fa-icon-white">
									<FontAwesomeIcon icon={faPhone} />
								</span>
								+ 806 786 9349
							</li>
							<li
								style={{
									marginBottom: "15px",
								}}
							>
								<span className="fa-icon-white">
									<FontAwesomeIcon icon={faEnvelope} />
								</span>
								gaurav.shilpakar@gmail.com
							</li>
						</ul>
						<h3 className="mt-8">Find me on</h3>
						<div>
							{socialLinks.map((social) => (
								<a
									key={social.title}
									href={social.url}
									title={social.title}
									className="fa-icon-white"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={social.icon} />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
