import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ContactUs() {
	useEffect(() => {
		document.title = "Contact Us";
	}, []);

	const [data, setData] = useState({name: "", email: "", phone: "", subject: "", message: ""});

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setData((pre) => {
			return {...pre, [name] : value} 
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }
		try{
			const result = await axios.post("http://localhost:8080/contact/tryContact", data);
			console.log(result);
		} catch(err){
			console.error("Something went wrong: ", err);
		}
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
								<p>If you have any questions please feel free to contact with us.</p>
								{/* Form */}
								<form className="form needs-validation" method="post" onSubmit={handleSubmit} noValidate>
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<input className="form-control input-fields" pattern="[A-Za-z]+" type="text" name="name" placeholder="Name" onChange={handleChange} value={data.name} required/>
												<div className="valid-feedback">
													Looks good!
												</div>
												<div className="invalid-feedback">
													Please enter valid name
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input className="form-control input-fields" type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} required/>
												<div className="valid-feedback">
													Looks good!
												</div>
												<div className="invalid-feedback">
													Please enter your valid email ID
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input className="form-control input-fields" type="number" name="phone" placeholder="Phone" onChange={handleChange} value={data.phone} required/>
												<div className="valid-feedback">
													Looks good!
												</div>
												<div className="invalid-feedback">
													Please enter your valid contact no.
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input className="form-control input-fields" type="text" name="subject" placeholder="Subject" onChange={handleChange} value={data.subject} required/>
												<div className="valid-feedback">
													Looks good!
												</div>
												<div className="invalid-feedback">
													Please enter a Subject for your message
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<textarea className="form-control input-fields" name="message" placeholder="Your Message" onChange={handleChange} value={data.message} required></textarea>
												<div className="valid-feedback">
													Looks good!
												</div>
												<div className="invalid-feedback">
													Please enter your message or query
												</div>
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