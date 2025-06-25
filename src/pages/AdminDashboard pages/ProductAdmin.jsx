import { useState, useEffect } from "react";

function ProductAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({id: "", name: "", price: "", stock: "", desc: "", img: ""});
    const [editId, setEditId] = useState(null);

    useEffect(() => {
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

    return (
        <>
            <h3>Available Products</h3> 
            <div className="table-responsive small"> 
                <table className="table table-striped table-sm"> 
                    <thead> 
                        <tr> 
                            <th scope="col">S.no.</th> 
                            <th scope="col">Name</th> 
                            <th scope="col">Price</th> 
                            <th scope="col">Stock</th> 
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th> 
                        </tr> 
                    </thead> 
                    <tbody>
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
                    </tbody>
                </table> 
            </div> 
            <button className="btn btn-primary mt-4" style={{maxWidth: "200px"}} onClick={() => setShowModal(true)}>Add New Product</button>

            {/*Modal*/}
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
        </>
    )
}

export default ProductAdmin;