import { useLocation, useNavigate } from "react-router-dom";

function ConfirmationPage() {
    const { state: formData } = useLocation();
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/Patient_Form", { state: formData });
    }

    const handleSubmit = () => {
        $('#staticBackdrop').modal('show'); 
    };

    function goHome() {
        const $modal = $('#staticBackdrop');

        $modal.one('hidden.bs.modal', () => {
            navigate("/"); 
        });

        $modal.modal('hide');
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
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Success!</h1>
                        </div>
                        <div className="modal-body">
                            Your form is submitted, we will contact you as soon as possible...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" id="ok-btn" onClick={goHome}>Go back to home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage;