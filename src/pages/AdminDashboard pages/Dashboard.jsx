function Dashboard(props) {
    return (
        <>
            <h3>Upcoming Appointments</h3> 
            <div className="table-responsive small"> 
                <table className="table table-striped table-sm"> 
                    <thead> 
                        <tr> 
                            <th scope="col">S.no.</th> 
                            <th scope="col">Name</th> 
                            <th scope="col">Age</th> 
                            <th scope="col">Email</th> 
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Reason</th>
                            <th scope="Extra Notes">Extra Notes</th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        {props.data.map((form, i) => (
                        <tr key={form.id}>
                            <td>{i + 1}</td>
                            <td>{form.fname} {form.lname}</td>
                            <td>{form.age}</td>
                            <td>{form.mail}</td>
                            <td>{form.doa}</td>
                            <td>{form.reason}</td>
                            <td>{form.extra}</td>
                        </tr>
                        ))}
                    </tbody>
                </table> 
            </div> 
        </>
    )
}

export default Dashboard;