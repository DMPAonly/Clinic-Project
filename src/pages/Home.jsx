import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
	useEffect(() => {
		document.title = "Electro Homeopathic Clinic";
		const script = document.createElement("script");
		script.src = "/js/owl-carousel.js"; // this assumes it's in public/js/
		script.async = true;
		document.body.appendChild(script);

		script.onload = () => {
			// Initialize carousel only after script has loaded
			if (window.$) {
				window.$(".hero-slider").owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				nav: true,
				dots: true,
				navText: ["<", ">"]
				});
			} else {
				console.warn("jQuery not available. OwlCarousel may not work.");
			}
		};

		return () => {
		// Cleanup: destroy the carousel if needed
			if (window.$ && window.$(".hero-slider").data("owl.carousel")) {
				window.$(".hero-slider").trigger("destroy.owl.carousel");
			}
		};
  	}, []);

    return (
		<>
			{/*Slider Area*/}
			<section className="slider">
				<div className="hero-slider">
					{/*Start Single Slider*/}
					<div className="single-slider" style={{backgroundImage: `url('img/slider2.jpg')`}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-7">
									<div className="text">
										<h1>Why <span>Electro Homeopathic?</span> </h1>
										<p>Electro Homeopathic Clinic provides safe, natural, and effective homeopathic treatments using advanced electrohomeopathy techniques. </p>
										<div className="button">
											<Link to="/Patient_Form" className="btn">Get Appointment</Link>
											{/*<a href="#" className="btn primary">Learn More</a>*/}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*End Single Slider*/}
					{/*Start Single Slider*/}
					
					{/*Start End Slider*/}
					{/*Start Single Slider*/}
					<div className="single-slider" style={{backgroundImage:`url('img/slider3.jpg')`}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-7">
									<div className="text">
										<h1>How<span> Electro Homeopathy Works!</span></h1>
										<p>Electrohomeopathy is a natural healing method that uses electrical impulses generated by homeopathic remedies to stimulate the body's self-healing processes. It focuses on treating the root cause of illnesses rather than simply alleviating symptoms.
											By combining the power of homeopathy with modern electrotherapy, our treatments are precise, painless, and free from side effects.</p>
										<div className="button">
											<Link to="/Patient_Form" className="btn">Get Appointment</Link>
											<Link to="/ContactUs" className="btn primary">Conatct Now</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*End Single Slider*/}
				</div>
			</section>
			{/*End Slider Area*/}
			
			{/*Start Schedule Area*/}
			<section className="schedule">
				<div className="container">
					<div className="schedule-inner">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-12 ">
								{/*single-schedule*/}
								<div className="single-schedule first">
									<div className="inner">
										<div className="icon">
											<i className="fa fa-ambulance"></i>
										</div>
										<div className="single-content">
											<h4>DR. B.Singh</h4>
											<p> B. Pharma, B.E.M.S.Medicine  <br></br>
											With over 5+ years of experience in electrohomeopathy, Dr. Singh combines compassionate care with scientific expertise to offer personalized treatment plans tailored to each patient's unique needs.<br></br>
											</p>
											{/*<a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>*/}
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-12">
								{/*single-schedule*/}
								<div className="single-schedule last">
									<div className="inner">
										<div className="icon">
											<i className="icofont-ui-clock"></i>
										</div>
										<div className="single-content">
											<h4>Opening Hours</h4>
											<ul className="time-sidual">
												<li className="day">Monday - Friday <span>10 AM- 11 PM</span></li>
												<li className="day">Saturday <span>9.00-10.30</span></li>
												{/*<li className="day">Monday - Thusday <span>9.00-15.00</span></li>*/}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End Start schedule Area*/}

			{/*Start Feautes*/}
			<section className="Feautes section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>We Are Always Ready to Help You & Your Family</h2>
								<img src="img/section-img.png" alt="#" />
								<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-12">
							{/*Start Single features*/}
							<div className="single-features">
								<div className="signle-icon">
									<i className="icofont icofont-ambulance-cross"></i>
								</div>
								<h3>Pain Management</h3>
								<p>Utilizing electro-stimulation for relief from chronic and acute pain conditions, encouraging tissue repair and nerve function.</p>
							</div>
							{/*End Single features*/}
						</div>
						<div className="col-lg-4 col-12">
							{/*Start Single features*/}
							<div className="single-features">
								<div className="signle-icon">
									<i className="icofont icofont-medical-sign-alt"></i>
								</div>
								<h3>Immune Support</h3>
								<p>Strengthens the immune system through subtle energy modulation to help prevent illness and improve overall wellness.</p>
							</div>
							{/*End Single features*/}
						</div>
						<div className="col-lg-4 col-12">
							{/*Start Single features*/}
							<div className="single-features last">
								<div className="signle-icon">
									<i className="icofont icofont-stethoscope"></i>
								</div>
								<h3>Digestive Health</h3>
								<p>Promotes digestive system balance, assisting in relieving discomfort and improving nutrient absorption naturally.</p>
							</div>
							{/*End Single features*/}
						</div>
					</div>
				</div>
			</section>
			{/*End Feautes -->
			
			<!-- Start Fun-facts -->
		
			<!--/ End Fun-facts -->
			
			<!-- Start Why choose -->
			<!-- <section className="why-choose section" >
				
			</section>
			<!--/ End Why choose -->
			
			<!-- Start Call to action -->
			<!-- <section className="call-action overlay" data-stellar-background-ratio="0.5">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="content">
								<h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
								<div className="button">
									<a href="#" className="btn">Contact Now</a>
									<a href="#" className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> -->
			<!--/ End Call to action -->
			
			<!-- Start portfolio -->
		
			<!--/ End portfolio -->
			
			<!-- Start service -->
			
			<!--/ End service -->
			
			<!-- Pricing Table -->
			
			<!--/ End Pricing Table -->
			
			
			
			<!-- Start Blog Area -->
			
			<!-- End Blog Area -->
			
			<!-- Start clients -->
			
			<!--/Ens clients -->
			
		
			<!-- End Appointment -->
			
		
			<!-- /End Newsletter Area --> */}
		</>
    )
}

export default Home;