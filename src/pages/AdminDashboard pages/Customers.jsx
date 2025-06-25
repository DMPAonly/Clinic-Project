function Customers() {
    return (
        <>
            <h3>Customers</h3> 
            <div className="table-responsive small"> 
                <table className="table table-striped table-sm"> 
                    <thead> 
                        <tr> 
                            <th scope="col">S.no.</th> 
                            <th scope="col">Name</th> 
                            <th scope="col">Age</th> 
                            <th scope="col">Problem</th> 
                            <th scope="col">Patient State</th>
                            <th scope="col">Reports</th>
                            <th scope="col">Actions</th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        <tr>
                            <td>History of all patients will be shown here....</td>
                        </tr>
                        {/* 
                        {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.desc}</td>
                            <td><img src={product.img} alt={product.name} width="80" /></td>
                            <td>      
                                <button className="btn btn-sm btn-info mr-2" onClick={() => handleEdit(product)}>Edit</button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                        */}
                    </tbody>
                </table> 
            </div> 
        </>
    )
}

export default Customers;