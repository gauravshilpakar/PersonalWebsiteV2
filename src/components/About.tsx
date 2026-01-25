import Image from "next/image";

export default function About() {
	return (
		<div className="section-container" id="about_me">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="section-container-spacer text-center">
							<h2>About me</h2>
						</div>
						<div className="row">
							<div className="col-md-10">
								<div className="row">
									<div className="col-xs-12 col-md-6">
										<div className="text-xl">
											Hello World! My name is <br />
											<h3 className="inline">
												Gaurav Shilpakar.
											</h3>
											<br /> I am a Computer Engineer
											working as a Software Developer at
											MetLife, NC. I graduated with a
											Master's of Information Technolgy
											from University of Cumberlands, KY
											and Bachelor's of Computer
											Engineering from Texas Tech
											University, TX. I love design and
											automation.
										</div>
									</div>
									<div className="col-xs-12 col-md-6">
										<Image
											src="/assets/images/IMG_2792.jpg"
											alt="Gaurav Shilpakar"
											width={600}
											height={600}
											className="img-responsive"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
