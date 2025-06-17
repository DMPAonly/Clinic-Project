import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PatientForm() {
    const navigate = useNavigate();
    const { state: editData } = useLocation();

    const [formData, setFormData] = useState({
        fname: "",
        mname: "",
        lname: "",
        age: "",
        mail: "",
        doa: "",
        reason: "",
        extra: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        console.log("Form submitted:", formData);
        setSubmitted(true);

        navigate("/Confirmation_page", { state: formData});
    }

    useEffect(() => {
        if(editData){
            setFormData(editData);
        }
    }, [editData]);

    return (
        <div id="page-1" className="d-flex flex-column min-vh-100">
            <div>
                <div className="container my-auto py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="card shadow rounded p-4 htmlForm-container">
                                <h2 style={{ textAlign: "center" }}>Patient Form</h2>
                                <form id="patient-form" className="needs-validation" onSubmit={handleSubmit} noValidate>
                                    <div className="mb-3">
                                        <label htmlFor="fname" className="form-label">First Name:</label>
                                        <input type="text" pattern="[A-Za-z]+" className="form-control input-fields" id="fname" name="fname" onChange={handleChange} value={formData.fname} required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your valid first name
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mname" className="form-label">Middle Name(optional):</label>
                                        <input type="text" pattern="[A-Za-z]+" className="form-control input-fields" id="mname" name="mname" onChange={handleChange} value={formData.mname}/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your valid middle name
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lname" className="form-label">Last Name:</label>
                                        <input type="text" pattern="[A-Za-z]+" className="form-control input-fields" id="lname" name="lname" onChange={handleChange} value={formData.lname} required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your valid last name
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="age" className="form-label">Age:</label>
                                        <input type="number" className="form-control input-fields" id="age" name="age" onChange={handleChange} value={formData.age} required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your valid age
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mail" className="form-label">Email ID:</label>
                                        <input type="email" className="form-control input-fields" id="mail" name="mail" onChange={handleChange} value={formData.mail} required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your valid email ID
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="doa" className="form-label">Date of Appointment: </label>
                                        <input type="date" className="form-control input-fields" id="doa" name="doa" onChange={handleChange} value={formData.doa} required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please select a date for appointment
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="reason" className="form-label">Reason for requesting appointment:</label>
                                        <textarea className="form-control input-fields" id="reason" name="reason" rows="4" style={{ resize: "none" }} placeholder="Diseases, Symptoms or any kind of health problem you're facing..." onChange={handleChange} value={formData.reason} required></textarea>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your reason for appointment
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="extra" className="form-label">Extra Notes(optional):</label>
                                        <textarea className="form-control input-fields" id="extra" name="extra" rows="4" style={{ resize: "none" }} placeholder="Type any additional info here..." onChange={handleChange} value={formData.extra}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 custom-btn" style={{ backgroundColor: "#4caf50", border: "none"}}>Submit form</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientForm;