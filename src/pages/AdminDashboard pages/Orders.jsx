function Orders() {
    return (
        <>
            <h3>Pending Orders</h3> 
            <div className="table-responsive small"> 
                <table className="table table-striped table-sm"> 
                    <thead> 
                        <tr> 
                            <th scope="col">S.no.</th> 
                            <th scope="col">Name</th> 
                            <th scope="col">Payment Mode</th> 
                            <th scope="col">Product_id</th> 
                            <th scope="col">Order State</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        <tr>
                            <td>Pending Orders will be shown here....</td>
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

export default Orders;