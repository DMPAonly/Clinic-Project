import { Link } from "react-router-dom";
import { useEffect } from "react";

function ContactUs() {
	useEffect(() => {
		document.title = "Contact Us";
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Submitted");
	}
	
    return (
        <>
		<main style={{backgroundColor: "#e9f5d9"}}>
            {/*<div className="breadcrumbs overlay">
			<div className="container">
				<div className="bread-inner">
					<div className="row">
						<div className="col-12">
							<h2>Contact Us</h2>
							<ul className="bread-list">
								<li><Link to="/">Home</Link></li>
								<li><i className="icofont-simple-right"></i></li>
								<li className="active">Contact Us</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</div>*/}
			{/* End Breadcrumbs */}
				
		{/* Start Contact Us */}
		<section className="contact-us section">
			<div className="container">
				<div className="inner" style={{backgroundColor: "#ffffff"}}>
					<div className="row"> 
						<div className="col-lg-6">
							<div className="contact-us-form">
								<h2>Contact With Us</h2>
								<p>If you have any questions please fell free to contact with us.</p>
								{/* Form */}
								<form className="form" method="post" onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="name" placeholder="Name" required="" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="email" name="email" placeholder="Email" required="" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="phone" placeholder="Phone" required="" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="subject" placeholder="Subject" required="" />
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<textarea name="message" placeholder="Your Message" required=""></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group login-btn">
												<button className="btn" type="submit">Send</button>
											</div>
										</div>
									</div>
								</form>
								{/*/ End Form */}
							</div>
						</div>
					</div>
				</div>
				<div className="contact-info">
					<div className="row">
						{/* single-info */}
						<div className="col-lg-4 col-12 ">
							<div className="single-info">
								<i className="icofont icofont-ui-call"></i>
								<div className="content">
									<h3>+(000) 1234 56789</h3>
									<p>info@company.com</p>
								</div>
							</div>
						</div>
						{/*/End single-info */}
						{/* single-info */}
						<div className="col-lg-4 col-12 ">
							<div className="single-info">
								<i className="icofont-google-map"></i>
								<div className="content">
									<h3>2 Fire Brigade Road</h3>
									<p>Chittagonj, Lakshmipur</p>
								</div>
							</div>
						</div>
						{/*/End single-info */}
						{/* single-info */}
						<div className="col-lg-4 col-12 ">
							<div className="single-info">
								<i className="icofont icofont-wall-clock"></i>
								<div className="content">
									<h3>Mon - Sat: 8am - 5pm</h3>
									<p>Sunday Closed</p>
								</div>
							</div>
						</div>
						{/*/End single-info */}
					</div>
				</div>
			</div>
		</section>
		{/*End Contact Us*/}
	</main>
    </>
    )
}

export default ContactUs;