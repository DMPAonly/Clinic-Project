import { useState, useEffect } from "react";

function AdminPanel() {
    const [showModal, setShowModal] = useState(false);
    const [forms, setForms] = useState([]);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({id: "", name: "", price: "", stock: "", desc: "", img: ""});
    const [editId, setEditId] = useState(null);

    function handleChange(e) {
        if(e.target.name === 'img'){
            const imgfile = e.target.files[0];
            setNewProduct({...newProduct, img: imgfile});
        } else{
            const name = e.target.name;
            const value = e.target.value;
            setNewProduct({...newProduct, [name]: value});
        }
    }

    function handleAddorEditProduct(e) {
        e.preventDefault();
        const imageURL = newProduct.img ? URL.createObjectURL(newProduct.img) : newProduct.img;
        console.log(imageURL);
        const product = {
            id: editId ? editId : products.length + 1,
            name: newProduct.name,
            price: newProduct.price,
            stock: newProduct.stock,
            desc: newProduct.desc,
            img: imageURL
        }
        if(editId){
            setProducts(products.map((p) => {
                if(p.id === editId){
                    return product;
                } else{
                    return p;
                }
            }));
        } else{
            setProducts([...products, product]);
        }
        setNewProduct({ name: '', price: '', stock: '', desc: '', img: null });
        setEditId(null);
        setShowModal(false);
    }

    function handleEdit(product) {
        console.log(product);
        setNewProduct(product);
        setEditId(product.id);
        setShowModal(true);
    }

    function handleDelete(id) {
        setProducts(products.filter((p) => {
            if(id !== p.id){
                return p;
            }
        }))
    }

    useEffect(() => {
        setForms([{
                id: 1,
                fname: "John",
                lname: "Doe",
                age: 28,
                mail: "john@example.com",
                doa: "2025-06-14",
                reason: "Fever and cold",
                extra: ""
            },
            {
                id: 2,
                fname: "Jane",
                lname: "Smith",
                age: 35,
                mail: "jane@example.com",
                doa: "2025-06-16",
                reason: "Skin rash",
                extra: ""
            }
        ]);

        setProducts([{
                id: 1,
                name: "Product-1",
                price: "$10",
                stock: 20,
                desc: "Lorem Ipsum",
                img: "/img/product-photos/1957060443.jpg"
            },
            {
                id: 2,
                name: "Product-2",
                price: "$15",
                stock: 35,
                desc: "Lorem Ipsum",
                img: "/img/product-photos/1957060443.jpg"
            }
        ]);
    }, []);

    return (
        <div className="Admin-panel">
            <section className="patient-panel">
                <div className="container">
                <h2 className="mb-4">Patient Submissions</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Appointment Date</th>
                        <th>Reason</th>
                        <th>Extra Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forms.map((form) => (
                        <tr key={form.id}>
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
                </div>
            </section>
            <section className="product-panel">
                <div className="container">
                <h2 className="mb-4">Product List</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                        <tr key={product.id}>
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
                    </tbody>
                    </table>
                </div>
                </div>
                <button className="btn btn-primary mt-4" style={{maxWidth: "200px"}} onClick={() => setShowModal(true)}>Add New Product</button>

                {/* Modal */}
                <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Add Product</h5>
                        <button type="button" className="close" onClick={() => {setShowModal(false); setEditId(null); setNewProduct({ name: '', price: '', stock: '', desc: '', img: null });}}>
                            <span>&times;</span>
                        </button>
                        </div>
                        <form onSubmit={handleAddorEditProduct}>
                        <div className="modal-body">
                            <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control" name="name" value={newProduct.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                            <label>Price</label>
                            <input type="text" className="form-control" name="price" value={newProduct.price} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                            <label>Stock</label>
                            <input type="number" className="form-control" name="stock" value={newProduct.stock} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" name="desc" value={newProduct.desc} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                            <label>Image</label>
                            <input type="file" className="form-control" name="img" onChange={handleChange} accept="image/*" required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => { setShowModal(false); setEditId(null); setNewProduct({ name: '', price: '', stock: '', desc: '', img: null });}}>Close</button>
                            <button type="submit" className="btn btn-success">{editId ? "Update Product" : "Add Product"}</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                {/*End Modal*/}

            </section>
        </div>
    )
}

export default AdminPanel;