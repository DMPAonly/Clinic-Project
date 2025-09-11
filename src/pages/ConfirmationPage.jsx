import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function ConfirmationPage() {
    const [showModal, setShowModal] = useState(false);
    const { state: formData } = useLocation();
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/Patient_Form", { state: formData });
    }

    const handleSubmit = () => {
        //$('#staticBackdrop').modal('show'); 
        try{
            axios.post("http://localhost:8080/clinic/createPatient", formData)
            .then(response => {
                console.log(response.data);
            });
        } catch(error){
            console.error("Error fetching data", error);
        } finally{
            setShowModal(true);
        }
    };

    function goHome() {
        setShowModal(false);
        navigate("/");
    }

    return (
        <div id="page-2">
            <div id="confirmation-form" className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-sm-12">
                        <div className="card shadow rounded">
                            <div className="card-header text-white text-center" style={{ backgroundColor: "#4caf50"}}>
                                <h4 className="mb-0">Confirm Details</h4>
                            </div>
                            <div className="card-body">
                                <p><strong>Name: </strong><span id="name">{formData?.fname} {formData?.mname} {formData?.lname}</span></p>
                                <p><strong>Age: </strong><span id="age">{formData?.age}</span></p>
                                <p><strong>Email ID: </strong><span id="mail">{formData?.mail}</span></p>
                                <p><strong>Date of Appointment: </strong><span id="doa">{formData?.doa}</span></p>
                                <p><strong>Reason of Appointment: </strong><span id="roa">{formData?.reason}</span></p>
                                <p><strong>Extra Notes: </strong><span id="extra">{formData?.extra}</span></p>
                            </div>
                            <div className="card-footer text-end">
                                <button id="edit-btn" type="button" className="btn btn-secondary me-2" onClick={handleEdit}>Edit Application</button>
                                <button id="submit-btn" type="button" className="btn btn-primary me-2" style={{ backgroundColor: "#4caf50"}} onClick={handleSubmit}>Confirm Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal*/}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"><b>Success! </b>✅</h5>
                        </div>
                            <div className="modal-body">
                                <p>Your form has been submitted, further details will be shared to your mail and whether your appointment will be on the date provided by you, will be up to doctor's availability.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="custom-btn-2 btn-sm btn-danger" onClick={goHome}>OK</button>
                            </div>
                    </div>
                </div>
            </div>
            {/*End Modal*/}
        </div>
    )
}

export default ConfirmationPage;