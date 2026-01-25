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
	faMapMarker,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission here
		alert(
			"Form submission is not configured yet. Please contact via email directly.",
		);
	};

	return (
		<div className="section-container" id="contact">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="text-center">
							<h2>Contact</h2>
						</div>
						<div className="w-full flex section-container-space">
							<div className="text-center w-full">
								<ul
									className="list-unstyled text-xl"
									style={{
										listStyle: "none",
										marginBottom: "30px",
									}}
								>
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
											<FontAwesomeIcon
												icon={faEnvelope}
											/>
										</span>
										gaurav.shilpakar@gmail.com
									</li>
									<li
										style={{
											marginBottom: "15px",
										}}
									>
										<span className="fa-icon-white">
											<FontAwesomeIcon
												icon={faMapMarker}
											/>
										</span>
										Lubbock, TX 79424
									</li>
								</ul>
								<h3 className="mt-8">Find me on</h3>
								<div>
									<a
										href="http://www.facebook.com/gaurav.shilpakar"
										title="Facebook"
										className="fa-icon-white"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faFacebook} />
									</a>
									<a
										href="http://www.twitter.com/gauravshilpakar"
										title="Twitter"
										className="fa-icon-white"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faTwitter} />
									</a>
									<a
										href="https://www.linkedin.com/in/gaurav-shilpakar/"
										title="LinkedIn"
										className="fa-icon-white"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faLinkedin} />
									</a>
									<a
										href="http://www.github.com/gauravshilpakar"
										title="GitHub"
										className="fa-icon-white"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faGithub} />
									</a>
									<a
										href="https://www.instagram.com/gauravvshilpakarr/"
										title="Instagram"
										className="fa-icon-white"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={faInstagram} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
